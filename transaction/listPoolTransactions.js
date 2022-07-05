import client from "../config/client";

const endpoint = "/listPoolTransactions";

export const listPoolTransactions = () => client.post(endpoint);