import client from "../../config/client";

const endpoint = "/listDelegationTopN";

export const listDelegationTopN = () => client.post(endpoint);