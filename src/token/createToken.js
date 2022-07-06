import client from "../../config/client";

const endpoint = "/createToken";

export const createToken = (
    creatorAddress,
    privateKey,
    tokenName,
    tokenSymbol,
    totalSupply,
    logo,
    decimals,
    description,
    webSite,
    socialMediaFacebookURL = "",
    socialMediaTwitterURL = "",
    socialMediaMediumURL = "",
    socialMediaYoutubeURL = "",
    socialMediaRedditURL = "",
    socialMediaBitcoinTalkURL = "",
    socialMediaInstagramURL = "",
    mailAddress = "",
    companyAddress = "",
    sector = "",
    hasAirdrop = false,
    hasStake = false
) => client.post(endpoint, {
    creatorAddress : creatorAddress,
    privateKey : privateKey,
    tokenName : tokenName,
    tokenSymbol : tokenSymbol,
    totalSupply : totalSupply,
    logo : logo,
    decimals : decimals,
    description : description,
    webSite : webSite,
    socialMediaFacebookURL : socialMediaFacebookURL,
    socialMediaTwitterURL : socialMediaTwitterURL,
    socialMediaMediumURL : socialMediaMediumURL,
    socialMediaYoutubeURL : socialMediaYoutubeURL,
    socialMediaRedditURL : socialMediaRedditURL,
    socialMediaBitcoinTalkURL : socialMediaBitcoinTalkURL,
    socialMediaInstagramURL : socialMediaInstagramURL,
    mailAddress : mailAddress,
    companyAddress : companyAddress,
    sector : sector,
    hasAirdrop : hasAirdrop,
    hasStake : hasStake
});