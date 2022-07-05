import client from "../config/client";

const endpoint = "/getBlock";

export const getBlock = (blockNumber) => client.post(endpoint, {
    "blockNumber": blockNumber
});