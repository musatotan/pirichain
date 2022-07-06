import client from "../../config/client";

const endpoint = "/getStats";

export const getStats = () => client.post(endpoint);