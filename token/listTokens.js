import client from "../config/client";

const endpoint = "/listTokens";

export const listTokens = (skip, limit) => client.post(endpoint, {
    "skip": skip,
    "limit": limit
});