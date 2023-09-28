

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

const invoiceByClientName = (clientName) => {

    return invoices.find(i => i.client.name === clientName);
}

const invoiceById = (id) => {
    return invoices.find(i => i.id === id)
};

const findInvoiceById = (id) => {
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            const result = invoiceById(id);

            if (result) {
                resolve(result);
            } else {
                reject('Error: No existe la factura por el id.');
            }
        }, 2500);
    });

    return promise;
}

export {
    papper,
    invoices as default,
    invoiceByClientName,
    invoiceById,
    findInvoiceById
};