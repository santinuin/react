

const papper = {
    producto: 'papper',
    price: 100,
    quantity: 10,
};

const invoices = [
    {
        id: 1,
        name: 'Compras de oficina',
        client: {
            name: 'Maria',
            lastname: 'Doe',
        },
        items: [
            {
                producto: 'keyboard',
                price: 399,
                quantity: 2,
            },
            {
                producto: 'mouse',
                price: 200,
                quantity: 1,
            },
            papper
        ]
    },
    {
        id: 2,
        name: 'Compras de computación',
        client: {
            name: 'Pepe',
            lastname: 'Doe',
        },
        items: [
            {
                producto: 'keyboard',
                price: 399,
                quantity: 2,
            },
            {
                producto: 'screen 17',
                price: 800,
                quantity: 1,
            },
            {
                producto: 'cpu',
                price: 1000,
                quantity: 10,
            }
        ]
    },
    {
        id: 3,
        name: 'Compras de papelería',
        client: {
            name: 'Jhon',
            lastname: 'Doe',
        },
        items: [
            {
                producto: 'pencil',
                price: 200,
                quantity: 1,
            },
            papper
        ]
    },
];

const invoicesName = invoices.map(i => i.name);
console.log(invoices);
console.log(invoicesName);

const invoicesClient = invoices.map(i => i.client.name);
console.log(invoicesClient);

const invoiceById = invoices.find(i => i.id === 2);
console.log(invoiceById);

const invoiceByClientName = invoices.find(i => i.client.name === 'Pepe');
console.log(invoiceByClientName);

const invoiceFilter = invoices.filter(i => i.id > 1);
console.log(invoiceFilter);

console.log('Filter eliminar');
const invoiceDeleted = invoices.filter(i => i.id !== 2);
console.log(invoiceDeleted);

const invoiceFilter2 = invoices.filter(i => i.items.includes(papper));
console.log(invoiceFilter2);

const result = invoices.some(i => i.name === 'Compras de oficina');
console.log(result);