import client from "../../config/client";

const endpoint = "/getDetailStats";

export const getDetailStats = () => client.post(endpoint);