class queue{
    constructor(){
        this.container = []
    }

    enqueue(item){
       return this.container.push(item)
    }

    dequeue(){
        return this.size()? this.container.shift() : 'Nothing for you'
    }
    front(){
        return this.size()? this.container[0]: 'Nothing for you'
    }
    size(){
        return this.container.length
    }
    isEmpty(){
        return this.size() == 0? true: false
    }
    print(){
        return this.container
    }
    end(){
        return this.size()? this.container.pop() : 'There is nothing in the queue'
    }
}

newQueue = new queue
// newQueue.enqueue('Lola')
// newQueue.enqueue('Bola')
// newQueue.enqueue('Fola')
// newQueue.enqueue('Kola')
// newQueue.dequeue()
// console.log(newQueue.print());
// console.log(newQueue.front());
// console.log(newQueue.size());
// console.log(newQueue.isEmpty());
console.log(newQueue.end());

