import client from "../config/client";

const endpoint = "/getPiriPrice";

export const getPiriPrice = (type) => client.post(endpoint, {
    "type": type
});