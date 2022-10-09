const {create} = require("apisauce");

const apiClient = create({
    baseURL: !global.piriChainNetworkIsTestNet?'https://core.pirichain.com/':'https://testnet.pirichain.com/'
});

module.exports = {
    client : apiClient
}