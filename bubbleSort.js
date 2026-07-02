function bubbleSort(arr) {
    let n = arr.length
    for (i = 0; i < n; i++) {
        for (j = 0; j < n - 1 - i; i++) {
            if (arr[j] < arr[j + 1]) {
                let tmp = arr[j];
                tmp = arr[j + 1]
                return tmp
            }
        }
    }
}

console.log(bubbleSort([3, 1, 5, 8, 4]));
