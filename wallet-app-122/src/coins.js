export class Coin {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.count = 0;
  }

  collect() {
    return this.count++;
  }

  getValue() {
    return this.price * this.count;
  }

  getMessage() {
    return `${this.count} ${this.name} в кошельке`;
  }
}

export class Ether extends Coin {
  constructor() {
    super("Ether", 3000);
  }
}

export class Bitcoin extends Coin {
  constructor() {
    super("Bitcoin", 50000);
  }
}
