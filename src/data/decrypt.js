import client from "../../config/client";

const endpoint = '/decrypt';

export const decrypt = (customID, privateKey) => client.post(endpoint, {
    'customID': customID,
    'privateKey': privateKey
});