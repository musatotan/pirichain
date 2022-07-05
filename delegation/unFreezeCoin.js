import client from "../config/client";

const endpoint = "/unFreezeCoin";

export const unFreezeCoin = (delegationAddress, delegationPrivateKey, nodeAddress, txHash) => client.post(endpoint, {
    "delegationAddress": delegationAddress,
    "delegationPrivateKey": delegationPrivateKey,
    "nodeAddress": nodeAddress,
    "txHash": txHash
});