const {createToken} = require('./createToken');
const {getToken} = require('./getToken');
const {listTokens} = require('./listTokens');
const {sendToken} = require('./sendToken');

module.exports = {
    createToken: createToken,
    getToken: getToken,
    listTokens: listTokens,
    sendToken: sendToken
}
