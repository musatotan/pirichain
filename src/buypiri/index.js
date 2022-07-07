const {createAddressForBuyPiri} = require('./createAddressForBuyPiri');
const {getBalanceForBuyPiri} = require('./getBalanceForBuyPiri');
const {getPiriPrice} = require('./getPiriPrice');

module.exports = {
    createAddressForBuyPiri: createAddressForBuyPiri,
    getBalanceForBuyPiri: getBalanceForBuyPiri,
    getPiriPrice: getPiriPrice
}