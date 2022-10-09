const index=require('./index');
let piri=new index(true);
piri.Wallet.getBalance('PRTMPRSg92ndyu5NeaEf7q3D6TdJeKKa6nKStVMcU4e',-1).then(g=>{
console.log(g);
});