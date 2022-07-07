const {client} = require('../../config/client')

const endpoint = "/pushData";

module.exports.pushData = (address, privateKey, to, key, value, enc) => client.post(endpoint, {
    "address": address,
    "privateKey": privateKey,
    "to": to,
    "customData[]": JSON.stringify({ "key": key, "value": value, "enc": enc })
});