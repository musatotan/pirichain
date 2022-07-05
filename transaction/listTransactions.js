import client from "../config/client";

const endpoint = "/listTransactions";

export const listTransactions = (skip, limit) => client.post(endpoint, {
    "skip": skip,
    "limit": limit
});