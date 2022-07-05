import client from "../config/client";

const endpoint = "/getCirculation";

export const getCirculation = () => client.post(endpoint);