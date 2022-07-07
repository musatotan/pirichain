import client from '../../config/client';

const endpoint = '/rescuePrivateKey';

/**
 * @param {string} words
 * @param {string} language
 */
export const rescuePrivateKey = (words, language = 'english') => client.post(endpoint, {
    'words': words,
    'language': language
});