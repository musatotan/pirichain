import client from "../../config/client";

const endpoint = "/freezeCoin";

export const freezeCoin = (delegationAddress, delegationPrivateKey, duptyAddress, amount) => client.post(endpoint, {
    "delegationAddress": delegationAddress,
    "delegationPrivateKey": delegationPrivateKey,
    "duptyAddress": duptyAddress,
    "amount": amount
});