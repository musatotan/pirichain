const {create} = require("apisauce");

const apiClient = create({
    baseURL: 'http://213.159.4.3/'
});

module.exports = {
    client : apiClient
}