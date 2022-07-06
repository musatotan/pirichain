import client from "../../config/client";

const endpoint = "/getBalanceList";

export const getBalanceList = (address) => client.post(endpoint, {
    "address": address
});