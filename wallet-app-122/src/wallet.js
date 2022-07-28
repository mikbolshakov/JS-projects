export default class Wallet {
  constructor() {
    this.coins = [];
  }

  addCoin(coin) {
    this.coins.push(coin);
    console.log(this.coins);
  }

  getBalance() {
    let sum = 0;
    this.coins.forEach((coin) => {
      sum += coin.getValue();
    });
    return sum;
  }
}
