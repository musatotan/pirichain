import client from "../../config/client";

const endpoint = "/getRichList";

export const getRichList = (assetID, limit, skip) => client.post(endpoint, {
    "assetID": assetID,
    "limit": limit,
    "skip": skip
});