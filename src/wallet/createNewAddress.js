import client from '../../config/client';

const endpoint = '/createNewAddress';

export const createNewAddress = (language = 'english', isCommercial = 'false') => client.post(endpoint, {
    'language': language,
    'isCommercial': isCommercial
});