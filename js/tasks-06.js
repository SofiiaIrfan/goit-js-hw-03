const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  // eslint-disable-next-line no-restricted-syntax
  for (const product of allProdcuts) {
    // console.table(product);
    // eslint-disable-next-line no-unused-vars
    let totalPrice;
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
      return totalPrice;
    }
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
