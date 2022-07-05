import client from "../config/client";

const endpoint = "/getBalanceForBuyPiri";

export const getBalanceForBuyPiri = (type, address, piriAddress) => client.post(endpoint, {
    "type": type,
    "address": address,
    "piriAddress": piriAddress
});