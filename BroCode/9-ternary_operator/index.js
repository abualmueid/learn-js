let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
let discountedAmount = purchaseAmount * (discount/100);
console.log(`Total price is ${purchaseAmount - discountedAmount}`);
