// Price Check
// There is a shop with old style cash registers.
// Rather than scanning items and pulling the price from a database,
// the price of each item is typed manually. This sometimes leads to errors.
// Given a list of items and their correct prices, compare those to the
// prices that were entered when each item was sold. Determine the number
// of errors in selling prices.

// For example, the items for sale are:
// products = [eggs, milk, cheese] 
// And prices for each are lined up by index:
// productPrices = [2.89, 3.29, 5.79]
// The items sold are:
// productSold = [eggs, eggs, cheese, milk]
// At:
// soldPrice = [2.89, 2.99, 5.97, 3.29]

// The second sale of eggs has a wrong price as does the sale of cheese.
// There are 2 errors in pricing.

// Constraints
// - 1 <= n <= 10exp5
// - 1 <= m <= n
// - 1.00 <= productPrices[i] <= 100000.00, where 0 <= i <= n and 0 <= m

// - Sample Case 1
// Sample Input 0
// [rice, sugar, wheat, cheese]
// [16.89, 56.92, 20.89, 345.99]
// [rice, cheese]
// [18.99, 400.89]

// Sample Output 0
// 2

// - Sample Case 2
// Sample Input 1
// [chocolate, cheese, tomato]
// [15.00, 300.90, 23.44]
// [chocolate, cheese, tomato]
// [15.00, 300.90, 10.00]

// Sample Output 1
// 1

// (1) The first step was to create a function that could merge the arrays
// alternating between product and the respective price. This will return
// and object where the key is the product and the price is the value of that key.
// (2) I applied this function to the products with the right price and the
// ones with the problematic prices to get objects like this:
// Products for sale: { rice: 16.89, sugar: 56.92, wheat: 20.89, cheese: 345.99 }
// Products sold: { rice: 18.99, cheese: 400.89 }
// (3) The next step was to cross reference and return the products which keys are present
// in both objects and are different from each other.
// (4) The last step was to measure and return the length of the object.

const priceCheck = (products, productPrices, productSold, soldPrice) => {
    const mergeIntoObject = (product, price) => {
        return product.reduce((obj, key, index) => ({
            ...obj,
            [key]: price[index]
        }), {});
    }
    let forSale = mergeIntoObject(products, productPrices);
    let sold = mergeIntoObject(productSold, soldPrice);
    let errors = Object.entries(sold).reduce((acc, [key, value]) => forSale[key] && forSale[key] !== value ? (acc[key] = forSale[key], acc) : acc, {});
    return Object.entries(errors).length;
}

console.log(priceCheck(["rice", "sugar", "wheat", "cheese"], [16.89, 56.92, 20.89, 345.99], ["rice", "cheese"], [18.99, 400.89]));
console.log(priceCheck(["chocolate", "cheese", "tomato"], [15.00, 300.90, 23.44], ["chocolate", "cheese", "tomato"], [15.00, 300.90, 10.00]));
console.log(priceCheck(["rice"], [16.89], ["rice", "cheese"], [18.99, 400.89]));
