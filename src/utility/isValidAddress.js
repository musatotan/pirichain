import client from "../../config/client";

const endpoint = '/isValidAddress';

export const isValidAddress = (address) => client.post(endpoint, {
    'address': address
});