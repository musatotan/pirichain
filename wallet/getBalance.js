import client from "../config/client";

const endpoint = '/getBalance';

export const getBalance = (address, assetID) => client.post(endpoint, {
    'address': address,
    'assetID': assetID
});