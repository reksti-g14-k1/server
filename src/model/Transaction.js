class Transaction {
    constructor(items, status, price) {
      this.items = items;
      this.status = status;
      this.price = price;
      this.createdAt = Date.now();
      this.updatedAt = Date.now();
    }

    toPlainObject() {
      return {
          items: this.items,
          status: this.status,
          price: this.price,
          createdAt: this.createdAt,
          updatedAt: this.updatedAt
      };
  }
  }
  
  export default Transaction;