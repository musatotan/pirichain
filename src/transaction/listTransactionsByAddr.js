import client from "../../config/client";

const endpoint = "/listTransactionsByAddr";

export const listTransactionsByAddr = (skip, limit, address) => client.post(endpoint, {
    "skip": skip,
    "limit": limit,
    "address": address
});