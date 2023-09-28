

const products = ['mesa', 'silla', 'noteboook', 'teclado'];
const products2 = products.concat(['pantalla lcd', 'sony tv']);

const fruits = ['peras', 'manzanas', 'sandias', 'frutillas'];

const market = [...products2, ...fruits, 'lechuga', 'papas', 'uvas'];
const market2 = products2.concat(fruits).concat('lechuga', 'papas', 'uvas');

console.log(products2);
console.log(market);
