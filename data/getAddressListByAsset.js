import client from "../config/client";

const endpoint = "/getAddressListByAsset";

export const getAddressListByAsset = (assetID, start, limit) => client.post(endpoint, {
    "assetID": assetID,
    "start": start,
    "limit": limit
});