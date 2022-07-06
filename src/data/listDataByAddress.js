import client from "../../config/client";

const endpoint = "/listDataByAddress";

export const listDataByAddress = (address, limit, skip) => client.post(endpoint, {
    "address": address,
    "limit": limit,
    "skip": skip
});