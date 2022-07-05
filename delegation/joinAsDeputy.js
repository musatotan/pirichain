import client from "../config/client";

const endpoint = "/joinAsDeputy";

export const joinAsDeputy = (address, privateKey, alias) => client.post(endpoint, {
    "address": address,
    "privateKey": privateKey,
    "alias": alias
});