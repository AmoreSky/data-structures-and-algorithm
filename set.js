class Set{
    constructor(){
        this.container = {}
    }

    has(item){
        return this.container.hasOwnProperty(item)
    }

    add(item){
        return !this.has(item)? this.container[item] = item: 'Item already extist'
    }

    delete(item){
        return this.has(item)? delete this.container[item]: 'item does not exist'
    }

    size(){
        return Object.keys(this.container).length
    }

    clear(){
        return this.container = {}
    }
}

const mySet = new Set()
mySet.add('lola')
mySet.add('bola')
mySet.add('fola')
mySet.add('sola')

console.log(mySet.container)
// console.log(mySet.has('tola'))
console.log(mySet.delete('lola'))
console.log(mySet.container)
console.log(mySet.size())

mySet.clear()
console.log(mySet);

