use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::UnorderedMap;
use near_sdk::serde::{Deserialize, Serialize};
use near_sdk::serde_json::json;
use near_sdk::{env, near_bindgen, AccountId, BorshStorageKey, PanicOnDefault};
use protocol_sdk::{Content, Context, OmniChain};

#[derive(Clone, PartialEq, BorshDeserialize, BorshSerialize, Serialize, Deserialize, Debug)]
#[serde(tag = "type", crate = "near_sdk::serde")]
pub struct GreetingData {
    from_chain: String,
    title: String,
    content: String,
    date: String,
}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct Greeting {
    omni_chain: OmniChain,
    greeting_data: UnorderedMap<String, GreetingData>,
}

#[derive(BorshSerialize, BorshStorageKey)]
enum StorageKey {
    DestinationContract,
    PermittedContract,
    GreetingData,
}

#[near_bindgen]
impl Greeting {
    #[init]
    pub fn new(owner_id: AccountId, omni_chain_contract_id: AccountId) -> Self {
        Self {
            omni_chain: OmniChain::new(
                owner_id,
                StorageKey::DestinationContract,
                StorageKey::PermittedContract,
                omni_chain_contract_id,
            ),
            greeting_data: UnorderedMap::new(StorageKey::GreetingData),
        }
    }

    /**
     * Send greeting info to other chains
     * @param to_chain - to chain name
     * @param title - greeting title
     * @param title - greeting content
     * @param title - greeting date
     */
    pub fn send_greeting(&self, to_chain: String, title: String, content: String, date: String) {
        let greeting_action_data = json!({
            "greeting": ["NEAR".to_string(), title, content, date]
        })
        .to_string();
        let action_name = "send_greeting".to_string();
        let dst_contract = self
            .omni_chain
            .destination_contract
            .get(&to_chain)
            .expect("to chain not register");
        let contract = dst_contract
            .get(&action_name)
            .expect("contract not register");
        let content = Content {
            contract: contract.contract_address.clone(),
            action: contract.action_name.clone(),
            data: greeting_action_data,
        };
        self.omni_chain.call_cross(to_chain, content);
    }

    pub fn receive_greeting(&mut self, greeting: Vec<String>, context: Context) {
        assert_eq!(
            env::predecessor_account_id(),
            self.omni_chain.omni_chain_contract_id,
            "Processs by cross chain contract"
        );
        self.omni_chain.assert_register_permitted_contract(
            &context.from_chain,
            &context.sender,
            &context.action,
        );
        let data = GreetingData {
            from_chain: greeting[0].clone(),
            title: greeting[1].clone(),
            content: greeting[2].clone(),
            date: greeting[3].clone(),
        };
        self.greeting_data.insert(&greeting[0], &data);
    }

    pub fn get_greeting(&self, from_chain: String) -> Option<GreetingData> {
        self.greeting_data.get(&from_chain)
    }
}

protocol_sdk::impl_omni_chain_register!(Greeting, omni_chain);
