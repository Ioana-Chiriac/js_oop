class Product {
    constructor(productName, price, stockQuantity) {
        this.productName = productName;
        this.price = price;
        this.stockQuantity = stockQuantity;
    }
}

const product1 = new Product(`Bicicleta`, 750, 1000);
console.log(product1);

const product2 = {
    productName: `Bicicleta`,
    price: 750,
    stockQuantity: 1000,
}

console.log(product2);

const product3 = new Product(`Leptop`, 2500, 300);
console.log(product3);

