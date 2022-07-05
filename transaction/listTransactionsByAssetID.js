import client from "../config/client";

const endpoint = "/listTransactionsByAssetID";

export const listTransactionsByAssetID = (skip, limit, assetID) => client.post(endpoint, {
    "skip": skip,
    "limit": limit,
    "assetID": assetID
});