const {client} = require('../../config/client')

const endpoint = '/decrypt';

module.exports.decrypt = (customID, privateKey) => client.post(endpoint, {
    'customID': customID,
    'privateKey': privateKey
});