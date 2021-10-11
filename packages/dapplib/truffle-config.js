require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture strong riot situate unknown heavy kiwi swallow that'; 
let testAccounts = [
"0xc583c891601aa2bedb05f15b7225a7355a779614f271b68f88fc86366f8cc5fd",
"0x402ac9e04e09fa4ae0674cb68a2c1a9afeb5a2773d68d2087fd962ac6a18db75",
"0xf7163caff95df8bcffa495a4fee1d5552c09ab979ccf11ccacbabb3c38f15941",
"0xd0373e4496b3cb6e1e646269c9d2f0dd6ab24951cea1b58a97a2819f258060b5",
"0x185e1be48424835d8acc0df8b711948c580c92549dc4051d0fd4bd1499b0b1b0",
"0xd530998c6d355b1cb37580412ff95d2a00bedf66452f56e0ce8bacc14269fdc0",
"0xc6f7e2b3581e8d388ac6b33b88f7bdbfb47d6fac8f24d4932618f56271e1f65a",
"0xc0ab0707df4e36aac22073f0dfa00ef26f9db6936b756cea15a64d67cbf3461c",
"0x1d2efbd00809bd7b8cd38186aa71dad3e48e0804f2be36d021ced8db9f74b50f",
"0xee07b9141a06081c59ec15a3c8440486ac1d7e5a6b044f2bb6f0586d66af8f78"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

