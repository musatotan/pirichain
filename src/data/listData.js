import client from "../../config/client";

const endpoint = "/listData";

export const listData = (limit, skip) => client.post(endpoint, {
    "limit": limit,
    "skip": skip
});