/** Adapter Design pattern
 *  
 *  Structural Design Pattern
 */

//Target
class LegacyShopper {
  constructor() {
    this.request = (product, quantity, price) => `${price * quantity}$`;
  }
}

// Adapteee
class OnlineShopping {
  constructor() {
    this.authenticate = (username, password) => console.log(`login logic for...${username} // ${password}`);
    this.setProduct = (product) => console.log(`setting product to ${product}`);
    this.setQuantity = (quantity) => console.log(`setting quantity to ${quantity}`);
    this.applyDiscount = (price) => price * 0.9; // online discount
    this.checkout = (quantity, price) => `${(this.applyDiscount(price)) * quantity}$`;
  }
}

// Adapter interface
class Adapter {
  constructor(username, password) {
    const cart = new OnlineShopping();
    cart.authenticate(username, password);

    this.request = (product, quantity, price) => {
      cart.setProduct(product);
      cart.setQuantity(quantity);
      return cart.checkout(quantity, price);
    }
  };
}

// legacy shopping
const cart = new LegacyShopper();
console.log("***Legacy system***");
console.log("Standard cost: " + cart.request("apples", 10, 3));

// OUTPUT
//
//***Legacy system***
//Standard cost: 30$

//////////////////////////////////////////////////////////////

// new shopping with Adapted interface
console.log("\n***New system***");

const adapter = new Adapter("Francesco", "123456"); //login logic simulation
//Same request, using the adapter
console.log("Online cost: " + adapter.request("apples", 10, 3)); //27$

// OUTPUT:
//
// ***New system***
// login logic for...Francesco // 123456
// setting product to apples
// setting quantity to 10
// Online cost: 27$