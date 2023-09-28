

const users = ['Pepe', 'Ana', 'Maria', 'Juan', 'Sebastian', 'Carlos', 'Josefa'];

const [Pepe, Ana, Maria, ...rest] = users;

console.log(Pepe, Ana, Maria, ...rest);