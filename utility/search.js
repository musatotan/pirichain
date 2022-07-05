import client from "../config/client";

const endpoint = '/search';

export const search = (value) => client.post(endpoint, {
    'value': value
});