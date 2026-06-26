function jumpSearch(array, target){
    let index = array.indexOf(target);
    if(index !== -1){
        return 'Found at index ' + index
    }else{
        return 'Not found'
    }
}
console.log(jumpSearch([1,2,3,4,5,6,7,8,9], 5));


