class Product {
    constructor(productName, price, stockQuantity) {
        this.productName = productName;
        this.price = price;
        this.stockQuantity = stockQuantity;
    }
    addToStock(quantity) {
        this.stockQuantity += quantity;
        this.logStockToConsole();
    }
    removeFromStock(quantity) {
        this.stockQuantity -= quantity;
        this.logStockToConsole();
    }
   logStockToConsole(){
    console.log(`Current Stock For ${this.productName} is now ${this.stockQuantity}.`);
   }

}

class DiscountProduct extends Product {
    constructor(productName, price, stockQuantity, discount) {
        super (productName, price, stockQuantity);
             this.discount = discount;
       
    }
    getDiscountPrice() {
        let price = this.price - this.price * (this.discount / 100 );
        return price;
    }
    logDiscountedPrice() {
        let discountedPrice = this.getDiscountPrice();
        console.log(`price with discounted is ${discountedPrice} for ${this.productName}`);
    }
}

const bike = new Product(`Bicicleta`, 750, 1000);
console.log(bike);

const product2 = {
    productName: `Bicicleta`,
    price: 750,
    stockQuantity: 1000,
}

console.log(product2);

const leptop = new Product(`Leptop`, 2500, 300);
console.log(leptop);

bike.addToStock(100);
console.log(bike);

leptop.removeFromStock(200);
console.log(leptop);

leptop.addToStock(300);
leptop.removeFromStock(300);
leptop.addToStock(200);


const smartphone = new DiscountProduct(`Smart Phone`, 3000, 200, 20);
console.log(smartphone);
smartphone.removeFromStock(23);

smartphone.price = 2000
smartphone.discount = 20;
smartphone.logDiscountedPrice();











