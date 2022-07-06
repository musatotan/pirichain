import client from '../../config/client';

const endpoint = '/rescuePrivateKey';

export const rescuePrivateKey = (words, language = 'english') => client.post(endpoint, {
    'words': words,
    'language': language
});