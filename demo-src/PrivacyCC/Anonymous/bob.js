const sm2 = require('sm-crypto').sm2;

const cipherMode = 1;// 1 - C1C3C2，0 - C1C2C3，default = 1

const bobKeyPair = {
  privateKey: '36b529a4325ab65d3b548eab9af3ead5f6db7e97cde2a3fb7783d9ca2fa0741d',
  publicKey: '0424ecffb84fc5802212d387dc0a9b9731f5084ab893b7f90b616135fa801be8707c5b38996b53b64c95067a5947d81e62fb8e67c89b6010850663e83bd9af1976'
};
console.log('bob key pair: ');
console.log(bobKeyPair);
console.log();

const alicePubKey = '0497f367606d51f7455ec41444d5662348b5cb9732922288161db55c381dc7fa1cf653f568065205bb0eba47b2549a34fdc1b1746613754e924669a8f6eb09dbaa';
console.log('alice public key: ');
console.log(alicePubKey);
console.log();

const nearAPI = require("near-api-js");
const networkId = "testnet";
// const accoutId = "4c55f2d1e1820a8e4340314b993010b749fa941e816b7552eef833f51ca8677f";
const contractId = "9f9350eb575cae7aac7f85a8c62b08d94dcac70a84e3c765464ff87c669fa4e5";
// const methodName = "";
const nodeUrl = `https://rpc.${networkId}.near.org`;

const nearConfig = {
  networkId,
  nodeUrl
};

(async () => {
  const near = await nearAPI.connect(nearConfig);
  const account = await near.account(contractId);
  const result = await account.viewFunction(
    contractId,
    "get_greeting",
    { from_chain: "PLATONEVMDEV" }
  );
  const encryptedMessage = result.content;
  const messageSignature = result.title;
  // console.log(result);
  console.log('cross chain message:');
  console.log({
    encryptedMessage: encryptedMessage,
    messageSignature: messageSignature
  });
  console.log();

  const decryptMessage = sm2.doDecrypt(encryptedMessage, bobKeyPair.privateKey, cipherMode) // decrypt message
  console.log('decrypted Message: ');
  console.log(decryptMessage);
  console.log('');

  let verifyResult = sm2.doVerifySignature(encryptedMessage, messageSignature, alicePubKey) // verify signature
  console.log('signature verify result: ' + verifyResult);
})();