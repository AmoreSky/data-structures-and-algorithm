
const linearSearch = (array, target) =>{
    for(let i = 0; i < array.length; i++){
        console.log('checking', array[i]);
        
        if(array[i] == target){
            console.log('target found at index', i);
            // return i
        }
        
    }
}
linearSearch([2, 4, 5, 7, 9, 2, 2], 2)