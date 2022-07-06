import client from "../../config/client";

const endpoint = "/getBlocksDesc";

export const getBlocksDesc = (skip, limit) => client.post(endpoint, {
    "skip": skip,
    "limit": limit
});