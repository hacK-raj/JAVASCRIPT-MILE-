function removeDuplicates(cart) {
  
  let uniqueCart = Array.from(new Set(cart));
  return uniqueCart;
}

let customerCart = ["apple", "banana", "apple", "orange", "banana", "grape"];
let updatedCart = removeDuplicates(customerCart);

console.log("Cart without duplicates:", updatedCart); // Output: Cart without duplicates: [ 'apple', 'banana', 'orange', 'grape' ]
