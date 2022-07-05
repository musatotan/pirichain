import client from "../config/client";

const endpoint = "/listMyDelegation";

export const listMyDelegation = (delegationAddress, delegationPrivateKey) => client.post(endpoint, {
    "delegationAddress": delegationAddress,
    "delegationPrivateKey": delegationPrivateKey,
});