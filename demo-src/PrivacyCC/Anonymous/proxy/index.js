
const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs');
const app = express();
const port = 3000;

const Web3 = require('web3');
// const web3 = new Web3('ws://127.0.0.1:6790');
const web3 = new Web3('https://devnetopenapi2.platon.network/rpc');
const chainId = 210309;

const contractAddress = '0xeC1Bca6CB9025Fc45FF66a876fEDbd5d26FA0B90';
const proxyPrivateKey = '0x767dbe7078ecd5383576ef521b35ad2cdb57317987ded34190357da3259232d2';
console.log('Blind proxy public key:');
console.log(web3.eth.accounts.privateKeyToAccount(proxyPrivateKey).address);
console.log();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// init zether contract
let rawData = fs.readFileSync('../build/contracts/ZSC.json');
let abiObj = JSON.parse(rawData);
const Contract =
  new web3.eth.Contract(abiObj.abi, contractAddress);

app.get('/', (req, res) => {
  res.send('Hello World.')
});

app.post('/sendGreeting', async (req, res) => {
  const data = req.body.encodedData;
  try {
    const account =
      web3.eth.accounts.privateKeyToAccount(proxyPrivateKey)
        .address;  // private key to public key
    const to = Contract.options.address;
    const nonce = web3.utils.numberToHex(
      await web3.eth.getTransactionCount(account));  // get nonce

    // const estimateGas =
    //     await web3.eth.estimateGas({from: account, to, data});
    let latestGas = parseInt((await web3.eth.getBlock('latest')).gasLimit - 1);
    // console.log(latestGas);
    latestGas = 7000000;
    let gas = web3.utils.numberToHex(latestGas);
    // const gasPrice = await web3.eth.getGasPrice();
    // console.log('gas: '+gas);
    // console.log('gasPrice: '+gasPrice);
    // console.log('estimateGas: ' + estimateGas);

    // transaction data
    const tx = { account, to, chainId, data, nonce, gas };
    // console.log(tx);

    let signTx =
      await web3.eth.accounts.signTransaction(tx, proxyPrivateKey);
    // console.log(signTx);
    let ret = await web3.eth.sendSignedTransaction(signTx.rawTransaction);
    // console.log('gasUsed: ' + ret.gasUsed);
    console.log('anonymous transfer transaction hash: ' + ret.transactionHash);
    return res.send(ret);
  } catch (e) {
    console.error(e);
    res.status(500).send({
      message: e
    });
  }
});

app.listen(port, () => {
  console.log(`Blind proxy listening on port ${port}`)
});