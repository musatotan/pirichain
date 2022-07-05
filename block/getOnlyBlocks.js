import client from "../config/client";

const endpoint = "/getOnlyBlocks";

export const getOnlyBlocks = (skip, limit) => client.post(endpoint, {
    "skip": skip,
    "limit": limit
});