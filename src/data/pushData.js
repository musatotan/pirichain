import client from "../../config/client";

const endpoint = "/pushData";

export const pushData = (address, privateKey, to, key, value, enc) => client.post(endpoint, {
    "address": address,
    "privateKey": privateKey,
    "to": to,
    "customData[]": JSON.stringify({ "key": key, "value": value, "enc": enc })
});