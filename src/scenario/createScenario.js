const {client} = require('../../config/client')

const endpoint = "/createScenario";

module.exports.createScenario = (address, privateKey, scenarioText) => client.post(endpoint, {
    "address": address,
    "privateKey": privateKey,
    "scenarioText": scenarioText
});