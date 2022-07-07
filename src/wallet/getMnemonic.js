const {client} = require('../../config/client')

const endpoint = '/getMnemonic';

module.exports.getMnemonic = (pKey, language = 'english') => client.post(endpoint, {
    'privateKey': pKey,
    'language': language
});