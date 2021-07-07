require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remind assume hunt fortune orange travel'; 
let testAccounts = [
"0x9c400a4aae95f74e7f728c86ed1b16471f6a59b4a844a2844ca1cd115090184c",
"0xb42d1dfd12a960c99b9b5849d9fd7a9db174310a29a4e69d4b52478905700b2c",
"0xc191a04ad5fb8b9c32d893fd68fb080780e3ca0b386562eebf7d0aea645010b1",
"0xe0136114887f171de5b617e4cb78ee40ed5637ce4c6d602b0d704dea7fe20cd4",
"0xfa7b6c9d03f5be4cc900543ec480dd7faaabcd7242cd8d329199e7de4acfeee7",
"0xcae15b2bef5e450744f4c32daea4777228e801ae4419318e735853af81683f54",
"0x3ec4c3fc61f7e89dd4f1651f267cd776a24542278bae147da4b5f32fedeb1a9f",
"0xe106141fa476e67d452f6b5469df81342561af94e8fd6eb0fd9d4b31e4d6e5f0",
"0x29dce67bf562580c0b7267ab12dcd79a628cf119b1b6a8938970b7c858cf3b26",
"0x1432ee933e00576ac4f4b01bac92d71207805f246d97f0b212705ba00b6b9e6b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

