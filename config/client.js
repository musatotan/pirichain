const {create} = require("apisauce");

const apiClient = create({
    baseURL: 'https://core.pirichain.com/'
});

module.exports = {
    client : apiClient
}