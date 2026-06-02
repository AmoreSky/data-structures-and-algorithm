class Stack{
    constructor(){
        this.container = {}
        this.count = 0
    }

    length(){
        return this.count
    }

    isEmpty(){
        console.log(this.length() == 0? true: false);
        // if(this.length() === 0){
        //     console.log('container is empty');
        // }else{
        //     console.log('not empty');
            
        // }
        
    }
    
    push(item){
        this.container[this.count] = item
        this.count ++
    }

    pop(){
        this.count --
        return this.length() == 0 ? 'No item to pop': delete this.container[this.count]
    }

    peekFirst(){
        return this.length == 0? 'Nothing for you': this.container[0]
    }

    peekLast(){
        return this.length == 0? 'Nothing for you': this.container[this.count - 1]
    }
}

const stackOne = new Stack()
console.log(stackOne.length());

// stackOne.isEmpty()

stackOne.push('lola')
stackOne.push('Bola')
stackOne.push('Tola')
stackOne.push('Kola')
stackOne.pop()
console.log(stackOne);
// console.log(stackOne.length());
// console.log(stackOne.peekFirst());
// console.log(stackOne.peekLast());