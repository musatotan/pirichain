import client from "../config/client";

const endpoint = "/getBlocks";

export const getBlocks = (skip, limit) => client.post(endpoint, {
    "skip": skip,
    "limit": limit
});