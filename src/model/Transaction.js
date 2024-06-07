class Transaction {
    constructor(items, status, price, customerId) {
      this.items = items;
      this.status = status;
      this.price = price;
      this.customerId = customerId
      this.createdAt = Date.now();
      this.updatedAt = Date.now();
    }

    toPlainObject() {
      return {
          items: this.items,
          status: this.status,
          price: this.price,
          customerId: this.customerId,
          createdAt: this.createdAt,
          updatedAt: this.updatedAt
      };
  }
  }
  
  export default Transaction;