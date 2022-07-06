import client from "../../config/client";

const endpoint = "/getToken";

export const getToken = (assetID) => client.post(endpoint, {
    "assetID": assetID
});