import Web3 from 'web3';
import arweave from "./arweave.js";

let provider = new Web3('https://api.avax-test.network/ext/bc/C/rpc');
const WALLET_KEY = 'd57bc284266f8bb2ee5ccc8cbe25c6c805e3c2608186ff40c3ce7ccfe9a503ae'
const WALLET = '0x39d87c0241C2084D3aAA2879Ae9766F3ED75679F'
const key = JSON.parse('{"kty":"RSA","n":"vrEAqlNEz48sUwJXT-0TPuZRqq84FjO7n-X_0aUM2gqsO4eEFMQREw7wXmzrRZr1G-IZKPl7f_C9FAyNLHlhfXhRu0O26uXUZFZbtdBAvplAu2Bhm8Dd4zrRtmWHYyBStIbnEdMtKndB7olEyUpfGT4idCpmfkmUmvvauT_TqPqJIUV5ip3qZLe1eeBzOazh4tYdzf8qtmNMBUsKims7-ItiwylsE0OmU7xzg7bFZsg7JLolsgMUtmXZeLMIUUNPIQNBPHi47Qm98OooI1TGkjY7ClJ7IfFFAyNnY8D-YYeDPrnRGesFEU96youlpxga4beQM-NwdNmg_s5TfWmpuejWNWOA6NI0_q5oLYajhFmSk4OZgt2ufXd-_ATAfvvII63rwBFOfCsltAmNM3j-69Qxy4QRblp2BDzzuMmEev6-byc_fMKL9S1rSYuvAB0YRjEMuogxiyh0Uow8p3jFR2tssphqa68y3iutaY78czqc5HYXLj-99bnRLDGTTakjL00kCTDDT72WyXqc67RtZxbndap5ltEktnhIy1lOL5B3CLcM_yqJ_y_QBB--N6A1SJSE_yJibB3L99fFUkvLSobyMn22_EHKInBf5bGuYDVUBEB2Usi-JbbDG_ygsaRYAYErlvTBnAixkbE-XF66cSD0Ry1NJmEviyhgvVG1kuc","e":"AQAB","d":"n2yN-NhK9Bhn3zJa2tiCuZiG-GMrSeyQVTtN5_DMUNKRced3NoFBISThMqBvBi9p8pjRnh8N8EXNXiCsOl10cxiPhDc1iycAra5BWDy2lGK96qnGkRfqqhm30H0LdoVEf-c08gMShKlVtt6OYpdJ8GmxFluIetZ7ZiNflnbVNzXWRbm2xnwFxZSNJUrQKozuAN4v5tQI2pkjql01f8ntRnsJ484Sq_xn5yPrk1fPq4GFaMwzzaKjw2ZdLXrIXmAenKQC-1KWkJ4PbYXmbrtmlEDAlX2lshfrMZd8zbpBMjrAMEXbmoaRIwrGxuV_ZbZSaxkzdx4UG60C22SWCoi3OuMw5bhtkM3dN3JiZUA8xqoAFbFu_Q-oQJsLEG2oWq4O5N9jRvQ-CDbTnbWYYfNDvPziVMlSaXhSSsku2buSUYOBdq2CzKQVaL6i73NfcTFKd-22QfezgkVOBAbpGRNJQmlUoumLjhBh3pj0zOgW3oAXP9oOI3F2J3eHqQ_hy5W4wm2mz8IFCQ3KvQdlrMOIK9Sk7f6GXzm_CZDOxMBOiLPomIJpc1WuazrFoMkNvFVFDNXWbkPyCu9kUhX5iHrJdV4Aso2QLCYJHt_Skwy-l6jjqff7r3Z5mDIZdWalgsYhWP-UiR92lnCfpIP55lDhHufgWq2Ave6HaAVyk9wIcvk","p":"7IgM14byyko__tBiq_rwOVmPpntyieeG9_YrbYb4zEzOx-7CaDibqMF-LB-A0Yp3MY6fv2oYRH1osKFSzzguur1v4KKwkKwuMBsaPhwu2E53yNSN08rkdi2VnGlOvmk0Pu0KnipG_xlD1JcSrfxdUbhbghBFImPhq1VnG-e_v1fy5OGjS3d2zcPm3-1oiUIqGujM6PyTRyFZWkdfaE737aXrvbOEqmBTOuJmLY8BUiKoZvxneqRPKPCqZvlWjb23AguZ0Jy_vlii354nmf5oilT9CIL2HsXyvqox-UCQU3SuWpdH2Nt0RLH3WMNJzuWZO5dWjGRJq1NVPWl9vLQs1Q","q":"zmMO2P0UwQPErEkizEIjjqPCiIDpz3rECmbCyQ5I_Y0GpThZ0IPbK2h0fJ9omY01UWwGfVDotpPwDvhtzni8Wt2Vv1QXXQNj78BDdTft4hQFIzkDMQXkgwTzU9EfZaUGYgsBoiqKWRyHIOVkm0zNT80htnEC9E_wlgDBOQkSq2mTKR3lZ08FAbqfbN7SxjliXkhKquaV6sQSQPBT6B93KvnCnvzIAQ8FdVxtZJoZOXwcmgvm-aHxwk99tD93a94YegTIEh5wKPtQGY4TrG6FSazjy3m3b8fKeq9ftTtQq-FmMzOOcSfmVD3GzLdfMXoZU6zCShKtXV2BLg_Z7Ijuyw","dp":"4EzUAL6UFoj6zuVF7Nj2XSw1MSb3oxbPwuzKmf7YiMR9gtNDwBmOYyW6RJVLT2oDRhd-HcK6aJiUYotZP_CDP8rNATTGQytEUZIh_Kw1MCKZLPWD2UgaBoeLzNuANMkHJnUbEIn-8YI_9KWerScYR5qQDHLpXIdjRVqjgK7wAr-gMrRWagZLvyz7D3bPHvqDeykwx_BcqaNSXG46Z2wbaF1jhG1sbTUTOE_hnWpzUjRThfXtGzwdZTF0JlpkXd1-Yo4lutIqcpMTQQN1gm7jK-sUWLH4O45zd6Nl6Hv1YW7QuE-lblwNkedCLAZlQ7Iu8Xe-NzwTMEjCGI6lEgG6UQ","dq":"kVso4OBV1p7dzG1yCaPnQRXK87K_eXZATgcT1uCtvY2uiXzHnNjQ6qCVshPfao4OaDsJ0wbB75z_rLuBMrLMDb8UMX17OvIhV4D0wcDTVK--8pC707IPv8sjyPt2_nKcrT6NNvZ5G8vAzAVjtxD_ZN3XiZPMfd8zVaJQc-gU8w7XK1U39Wus3gvfLqE8l4lg44BMvlLKcV8IcB4TKl_G4Uiorqrf_gbjVEX1ca4qZ9cmmcQaN-S7zZuIsAMnC5yPZpiphEFVwzdEscrjxkTMsRgIE421CRAQZhnP8WdGKNgFz7fW8ZElYl1j_1iCvej9n3YEHIFNAn3RdmyJklLaww","qi":"4D2Rmq5U8hJqto4aX79K1iGYX6tqohnRboECrrRFHcSN0vjCZ7IKAQ_PSbhoIJewXV3bhy74PX_pjfg8GxjmGT4615_xi2iTDL1AjbJCgq17iVq1NNJeLU3rAklN6gdO65xDmO-hb38nhsSvcVIqHcNSHyOXdEOImQ-xQSZx80LsbalpNtxLxfpO_p5BZ7C-_wMc8J7u73CHR4XPZt3sSo5caiC08DvxO-lORwea7U21K1oHLxfjvXn7GtN_GzEeJiYuB2_vvfnGuNsWnsgWwhdYqkaD1zcbWEPlxMMqwYzc8MdNb45HVR3txSBTvWT6Pmt0toCzuh_HvmzTmJ9_7g"}');

import StoreAbi from "./build/contracts/Store.js"
const storeAddress = '0xD0493460d2CA5D2753E441Aa627437c17caDc887'

// Get store contract instance
const contract = new provider.eth.Contract(StoreAbi, storeAddress);
provider.eth.accounts.wallet.add(WALLET_KEY)

let orderId = 0
let lastOrderId = 0

async function initOrderId() {
  orderId = await contract.methods.orderIds().call()
  lastOrderId = orderId
}

function wait(ms) {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
};

async function loop() {
  // console.log("update", orderId)
  while (true) {
    orderId = await contract.methods.orderIds().call()
    console.log("orderId", orderId, "lastOrderId", lastOrderId)
    const order = await contract.methods.getOrder(orderId).call()
    if (orderId != lastOrderId) {
      console.log("==> save order", order)
      var b = new Buffer.from(order.data);
      const buffer = Buffer.from(new Buffer.from(order.data).toString('base64'), "base64");
      // Create and submit transaction
      const transaction = await arweave.createTransaction(
        {
          data: buffer,
        },
        key
      );

      await arweave.transactions.sign(transaction, key);
      const postResponse = await arweave.transactions.post(transaction);
      // console.log("post response", postResponse);
      // Transaction ID gets updated after arweave.transactions.post, which is a bit unintuitive
      console.log("==> arweave Tx", transaction.id)
      const trx = contract.methods.updateOrderArTx(orderId, transaction.id)
      const gas = await trx.estimateGas({ from: WALLET })
      const gasPrice = await provider.eth.getGasPrice()
      const data = trx.encodeABI()
      const nonce = await provider.eth.getTransactionCount(WALLET)
      // console.log("==> nonce", nonce)
      const tx = {
        from: WALLET,
        to: storeAddress,
        data,
        gas,
        gasPrice,
        nonce,
      }

      try {
        console.log('Transaction ready to be sent')
        const receipt = await provider.eth.sendTransaction(tx)
        console.log('receipt', receipt)
        lastOrderId = orderId
      } catch (error) {

      }
    }
    await wait(5000);
  }
}

(async () => {
  // await update()
  await initOrderId()
  loop()
})();

