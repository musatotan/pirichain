import client from '../config/client';

const endpoint = '/getMnemonic';

export const getMnemonic = (pKey, language = 'english') => client.post(endpoint, {
    'privateKey': pKey,
    'language': language
});