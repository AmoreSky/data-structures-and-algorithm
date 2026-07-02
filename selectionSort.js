function seclectionSort (arr){
    for(let i = 0; i < arr.length - 1; i++){
        let miniIndex = i

        for(let j = i; j < arr.length - 1; j++){
            if(arr[j] > arr[miniIndex]){
                miniIndex = j
            }
        }

        if(miniIndex !== i){
            let temp = arr[i]
            arr[i] = arr[miniIndex]
            arr[miniIndex] = temp
        }
    }

    return arr
}

const numbers = [20, 10, 2, 7, 8, 1]
console.log('Before', numbers);
console.log('After', seclectionSort(numbers));

