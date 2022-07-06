import client from "../../config/client";

const endpoint = "/getDetailsOfAddress";

export const getDetailsOfAddress = (address) => client.post(endpoint, {
    "address": address
});