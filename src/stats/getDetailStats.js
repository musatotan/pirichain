const {client} = require('../../config/client')

const endpoint = "/getDetailStats";

module.exports.getDetailStats = () => client.post(endpoint);