console.log("helloe");
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  module.exports = { greet };

class Wallet {
    constructor (key,balanceval) {
        this.key = key;
        this.balanceV = balanceval;
    }
    balance() {
        console.log(this.balanceV);
    }
     airdrop(drop) {
        this.balanceV = this.balanceV+drop;
    }
}

var wallet1 = new Wallet(123,124.512);
var dictstring = JSON.stringify(wallet1);
var fs = require('fs');

fs.writeFile("walletsave.json", dictstring, function(err, result) {
    if(err) console.log('error', err);
});
wallet1.balance();
wallet1.airdrop(15);
wallet1.balance();

