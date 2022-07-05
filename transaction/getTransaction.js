import client from "../config/client";

const endpoint = "/getTransaction";

export const getTransaction = (tx) => client.post(endpoint, {
    "tx": tx
});