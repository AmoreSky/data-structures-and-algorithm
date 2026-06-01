
const container = new Set()

container.add('lola')
container.add('kola')
container.add('tola')
container.add('fola')
container.add('kola')

console.log(container);
console.log(container.size);
console.log(container.has('mola'));
console.log(container.delete('fola'));
container.clear();
console.log(container);



