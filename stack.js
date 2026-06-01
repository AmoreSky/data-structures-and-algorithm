class Stack{
    constructor(){
        this.container = ['chocolate', 'gala']
        // this.container = []
    }

    length(){
        return this.container.length;
    }

    isEmpty(){
        // this.container.isEmpty;

        // return this.container.length?'items found':'no items found';
         
        
        // if(this.container.length){
        //     return 'No item found in the container'
        // }

        // if(this.length() == 0){
        //     return 'The stack is empty'
        // }

        return this.length() ? {status: true, message: 'stack is empty'} : {status: false, message: 'Stack is not emprty'}
        
    }

    push(item){
        return this.container.push(item)
    }

    pop(){
        // if(this.length() == 0){
        //     return 'No item in the container'
        // }else{
        //     this.container.pop()
        // }

        // return this.length()? this.container.pop(): 'No item to pop'
        console.log(this.length()? this.container.pop(): 'No item to pop');
        
    }
    print(){
        return this.container
    }

    peekLast(){
        return this.length()? this.container.pop():'Nothing for you'
        // return this.length()? this.container[this.length() - 1]:'Nothing for you'
    }
    
    peekFirst(){
        // return this.length()? this.container[0]:'Nothing for you'
        return this.length()?this.container.shift(): 'Nothing for you'

    }
}

const stack1 = new Stack();
// console.log(stack1.pop())
// stack1.pop()
console.log(stack1.peekFirst());





// use an object to implement a stack