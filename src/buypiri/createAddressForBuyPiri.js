import client from "../../config/client";

const endpoint = "/createAddressForBuyPiri";

export const createAddressForBuyPiri = (type) => client.post(endpoint, {
    "type": type,
});