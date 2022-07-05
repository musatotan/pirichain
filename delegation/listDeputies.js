import client from "../config/client";

const endpoint = "/listDeputies";

export const listDeputies = () => client.post(endpoint);