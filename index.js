 class index {
     Wallet = {};
     Token = {};
     Transaction = {};
     Block = {};
     Data = {};
     Utility = {};
     Delegation = {};
     BuyPiri = {};
     Stats = {};
     Scenario = {};

    constructor(isTestNET=false) {
        if (isTestNET)
            global.piriChainNetworkIsTestNet=true;

        this.Wallet = require('./src/wallet');
        this.Token = require('./src/token');
        this.Transaction = require('./src/transaction');
        this.Block = require('./src/block');
        this.Data = require('./src/data');
        this.Utility = require('./src/utility');
        this.Delegation = require('./src/delegation');
        this.BuyPiri = require('./src/buypiri');
        this.Stats = require('./src/stats');
        this.Scenario = require('./src/scenario');
    }


}
 module.exports = index;
