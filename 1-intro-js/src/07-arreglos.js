

const products = ['mesa', 'silla', 'noteboook', 'teclado'];

products.push('pantalla lcd', 'sony tv')

console.log(products);

products.forEach(el => console.log(el));

for (const prod of products) {
    console.log(prod);
}

for (let index = 0; index < products.length; index++) {
    const element = products[index];
    console.log(element);
}

console.log(products[4]);