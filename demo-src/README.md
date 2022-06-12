# These Demos show how Dante protocol stack works. 

In general, with the help of Dante protocol stack, developers can make their dApps accessible for the whole web3 world no matter which public chain they deployed.

We have already deployed Dante protocol stack on some EVM chains(Ethereum, BNB, Avalanche, etc.), Near, Flow, etc, and we have deployed some routers in our cloud server. So you can try the demos below directly(some of the demos nees you to set your private key first, and you can directly see these senarios at [demo-video](https://github.com/wanxiang-blockchain/2022-Wanxiang-Blockchain-Spring-Hackathon-Dante-Network/tree/main/demo-video)).

Besides, we have implemented the protocol stack for Venachain, which needs to launch local Venachain nodes first.

Some classical situations based on Dante to extend the access boundaries of dApps are as below:

* [**Venachain and Filecoin**](https://github.com/wanxiang-blockchain/2022-Wanxiang-Blockchain-Spring-Hackathon-Dante-Network/tree/main/demo-src/VenachainFilecoin): make the storage service on Filecoin could be accessed from Venachain. 
* [Basic functions](https://github.com/wanxiang-blockchain/2022-Wanxiang-Blockchain-Spring-Hackathon-Dante-Network/tree/main/demo-src/Basic/cross-chain-demo): include general message communication and contracts invocations between multi-chains.
* [**Privacy cross-chain communication**](https://github.com/wanxiang-blockchain/2022-Wanxiang-Blockchain-Spring-Hackathon-Dante-Network/tree/main/demo-src/PrivacyCC/Anonymous): one of the special SQoS items makes communication between two users on different chains privacy, which is similar to the SSL/TLS in HTTPS(one of the basic abilities in the web2 internet protocol suite).
* [Omnichain Storage](https://github.com/wanxiang-blockchain/2022-Wanxiang-Blockchain-Spring-Hackathon-Dante-Network/tree/main/demo-src/OmnichainStorage/store): make the storage service on Filecoin and Arweave be able to be accessed from other chains in web3 world.
* [Multi-chain Swap](https://github.com/wanxiang-blockchain/2022-Wanxiang-Blockchain-Spring-Hackathon-Dante-Network/tree/main/demo-src/Swap/Demo-Swap): a simple multi-chain swap dApp example based on hash-lock.
* [Omnichain NFT](https://github.com/wanxiang-blockchain/2022-Wanxiang-Blockchain-Spring-Hackathon-Dante-Network/tree/main/src/ProtocolInFlow/cadence-contracts): with the help of Dante protocol stack, NFTs created on Flow could be visited from other chains(like Opensea in this demo).
