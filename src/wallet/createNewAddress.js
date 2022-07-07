const {client} = require('../../config/client')

const endpoint = '/createNewAddress';

module.exports.createNewAddress = (language = 'english', isCommercial = 'false') => client.post(endpoint, {
    'language': language,
    'isCommercial': isCommercial
});
