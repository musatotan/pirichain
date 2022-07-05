import client from "../config/client";

const endpoint = "/sendToken";

export const sendToken = (address, privateKey, to, amount, assetID) => client.post(endpoint, {
    "address": address,
    "privateKey": privateKey,
    "to": to,
    "amount": amount,
    "assetID": assetID
});