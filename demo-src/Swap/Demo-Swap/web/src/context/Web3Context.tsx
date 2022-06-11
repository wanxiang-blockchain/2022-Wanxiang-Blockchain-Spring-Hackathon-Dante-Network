import React, { useState, createContext, useEffect } from 'react';
import { ethers, Contract, utils } from 'ethers';
import Web3Modal from 'web3modal';
import Token from "../contract/Token.json"
import Swap from "../contract/Swap.json"
import { getContract } from "../contract/index"
import { CONFIG } from '../config/chain'

const Web3Context = createContext(null);

export const Web3Provider = (props: any) => {
  const [account, setAccount] = useState('');
  const [signer, setSigner] = useState<any>(null);
  const [blockchainId, setBlockchainId] = useState(0);
  const [chainName, setChainName] = useState('');

  const getChainSwapAddress = (chainId) => {
    if (chainId === CONFIG.BSC.Name) {
      return CONFIG.BSC.SwapAddress
    } else if (chainId === CONFIG.ETH.Name) {
      return CONFIG.ETH.SwapAddress
    }
  }

  const functionsToExport = {
    connectWallet: () => { },
    approveSwap: async (erc20, swap, amount) => { },
    getOrderList: (swapAddress) => { },
    createOrder: async (chainFrom, asset_from, amountFrom, chainTo, assetTo, amountTo) => { },
    matchOrder: async (fromChainId, chainId, orderId, asset, amount, payee, hashKey) => { },
    getSwapAddress: (chainId) => { },
    faucet: (tokenAddress) => { },
    getBalance: async (tokenName, chain) => { },
    unlockAsset: async (fromChainId, orderId, hashKey) => { },
  }

  useEffect((): (() => void) | undefined => {
    const { ethereum } = window as any;

    if (ethereum && ethereum.on) {
      const handleConnect = (): void => {
        console.log("Handling 'connect' event");
      };

      const handleChainChanged = (chainId: string | number): void => {
        console.log("Handling 'chainChanged' event with payload", chainId);
        (chainId == 0x61) ? setChainName("BSCTEST") : setChainName("RINKEBY")
        const checkConnection = async () => {
          if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const { chainId } = await provider.getNetwork();
            setBlockchainId(chainId);
            (chainId === 97) ? setChainName("BSCTEST") : setChainName("RINKEBY")

            if (blockchainId != 0) {
              const addresses = await provider.listAccounts();
              if (addresses.length) {
                setAccount(addresses[0]);
                const signer = provider.getSigner();
                setSigner(signer);
              } else {
                return;
              }
            }
          }
        };
        checkConnection();
      };

      const handleAccountsChanged = (accounts: string[]): void => {
        signer.getAddress().then((account) => setAccount(account))
      };

      ethereum.on('connect', handleConnect);
      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);

      // cleanup function
      return (): void => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect);
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
        }
      };
    }
  }, [blockchainId, account, signer]);

  functionsToExport.connectWallet = async () => {
    console.log('connectWallet');
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const userAddress = await signer.getAddress();
      const { chainId } = await provider.getNetwork();
      setBlockchainId(chainId);
      (chainId === 97) ? setChainName("BSCTEST") : setChainName("RINKEBY")
      setAccount(userAddress);
      setSigner(signer);
    } catch (error) {
      console.log(error);
    }
  };

  functionsToExport.approveSwap = async (tokenAddress, swapAddress, amount) => {
    console.log('approveSwap tokenAddress:', tokenAddress, 'swapAddress:', swapAddress, 'amount:', amount)
    const contract = new ethers.Contract(tokenAddress, Token.abi, signer)
    const transaction = await contract.approve(swapAddress, amount);
    await transaction.wait()
  };

  functionsToExport.getOrderList = async () => {
    let orderList = []
    try {
      let provider = new ethers.providers.JsonRpcProvider(CONFIG.BSC.Rpc);
      const contract = new ethers.Contract(CONFIG.BSC.SwapAddress, Swap.abi, provider)
      orderList = await contract.query_all_orders()
      // console.log('getOrderList bsc orders', orderList)

      {
        let provider = new ethers.providers.JsonRpcProvider(CONFIG.ETH.Rpc);
        const contract = new ethers.Contract(CONFIG.ETH.SwapAddress, Swap.abi, provider)
        let orders = await contract.query_all_orders()
        // console.log('getOrderList eth orders', orders)
        orderList = orderList.concat(orders)
      }
    } catch (error) {

    }
    return orderList
  };

  // function create_order(uint256 chain_from, address asset_from, uint256 amount_from, uint256 chain_to, address asset_to, uint amount_to) public returns (bool) {
  functionsToExport.createOrder = async (chainFrom, assetFrom, amountFrom, chainTo, assetTo, amountTo) => {
    console.log("chainFrom", chainFrom, "assetFrom", assetFrom, "amountFrom", amountFrom)
    console.log("chainTo", chainTo, "assetTo", assetTo, "amountTo", amountTo)
    let swapContract = getContract(getChainSwapAddress(chainFrom), Swap.abi)
    const transaction = await swapContract.create_order(chainFrom, assetFrom, amountFrom, chainTo, assetTo, amountTo)
    await transaction.wait()
  };

  functionsToExport.matchOrder = async (fromChainId, chainId, orderId, asset, amount, payee, hashKey) => {
    console.log("matchOrder", 'from chain:', fromChainId, 'current chain:', chainId, 'orderId', orderId, 'asset:', asset, 'amount:', amount.toString(), 'payee', payee)
    let swapContract = getContract(getChainSwapAddress(chainId), Swap.abi)
    const transaction = await swapContract.match_order(fromChainId, orderId, asset, amount.toString(), payee, hashKey)
    await transaction.wait()
  };

  // function unlock_asset(string calldata chain_id, uint256 order_id, string calldata hashkey, address payee_address) public {
  functionsToExport.unlockAsset = async (fromChainId, orderId, hashKey) => {
    // let swapContract = getContract(getChainSwapAddress(fromChainId), Swap.abi)
    const swapContract = new ethers.Contract(getChainSwapAddress(fromChainId), Swap.abi, signer)
    console.log("unlockAsset", 'fromChainId:', fromChainId, 'swapContract:', getChainSwapAddress(fromChainId), 'orderId:', orderId, 'hashKey', hashKey)
    const transaction = await swapContract.unlock_asset("123", orderId, hashKey, getChainSwapAddress(fromChainId))
    await transaction.wait()
  };

  functionsToExport.getSwapAddress = (chainId) => {
    return getChainSwapAddress(chainId);
  };

  functionsToExport.faucet = async (tokenAddress) => {
    const contract = new ethers.Contract(tokenAddress, Token.abi, signer)
    const transaction = await contract.faucet();
    await transaction.wait()
  };

  functionsToExport.getBalance = async (tokenName, chain) => {
    let provider;
    if (chain == "BSCTEST") {
      provider = new ethers.providers.JsonRpcProvider(CONFIG.BSC.Rpc);
    } else if (chain == "RINKEBY") {
      provider = new ethers.providers.JsonRpcProvider(CONFIG.ETH.Rpc);
    }

    let list = CONFIG.FaucetTokenList.filter(k => (k.Name === chain))[0].List
    let tokenAddress = list.filter(k => (k.name == tokenName))[0].address;
    const contract = new ethers.Contract(tokenAddress, Token.abi, provider)
    let balance = await contract.balanceOf(account)
    console.log('getBalance', 'token', tokenName, 'token address', tokenAddress, balance.toString())
    return balance
  };

  return (<Web3Context.Provider value={{ account, chainName, ...functionsToExport }}>
    {props.children}
  </Web3Context.Provider>)
}

export default Web3Context;
