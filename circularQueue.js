class CircularQueue{
    constructor(){
        this.container = []
        this.maxSize = 5
    }

    print(){
        return this.container
    }
    size(){
        return this.container.length
    }
    isFull(){
        return this.size() == this.maxSize ? true : false
    }
    isEmpty(){
        return this.size() == 0? true: false
    }
    enqueue(item){
        return !this.isFull() ? this.container.push(item): 'queue already full'
    }
    dequeue(){
        return this.isEmpty()? 'No item in the queue': this.container.shift()
    }
    peek(){
        return this.isEmpty()? 'Nothing for you': this.container[0]
    }
    rear(){
        return this.isEmpty()? 'Nothing for you': this.container.pop()
    }
}

const newQueue = new CircularQueue()
// console.log(newQueue.isFull());

newQueue.enqueue('LOLA')
newQueue.enqueue('BOLA')
newQueue.enqueue('TOLA')
newQueue.enqueue('FOLA')
newQueue.enqueue('SOLA')
newQueue.enqueue('SOLA')
// newQueue.dequeue()
newQueue.enqueue('KOLA')

// console.log(newQueue.size());
console.log(newQueue.print());

