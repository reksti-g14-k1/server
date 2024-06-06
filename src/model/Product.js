class Product {
    constructor(name, price, type, stock) {
      this.name = name;
      this.price = price;
      this.type = type;
      this.stock = stock;
      this.createdAt = Date.now();
      this.updatedAt = Date.now();
    }

    toPlainObject() {
      return {
          name: this.name,
          price: this.price,
          type: this.type,
          stock: this.stock,
          createdAt: this.createdAt,
          updatedAt: this.updatedAt
      };
  }
  }
  
  export default Product;