const {client} = require('../../config/client')

const endpoint = '/rescuePrivateKey';

/**
 * @param {string} words
 * @param {string} language
 */
module.exports.rescuePrivateKey = (words, language = 'english') => client.post(endpoint, {
    'words': words,
    'language': language
});