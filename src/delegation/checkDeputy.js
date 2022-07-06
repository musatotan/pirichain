import client from "../../config/client";

const endpoint = "/checkDeputy";

export const checkDeputy = (address) => client.post(endpoint, {
    "address": address
});