//n! = n* (n-1)!

function factorial (n){
    if(n ==1){
        return 1
    } else{
        return n * factorial (n-1)
    }
}

console.log(factorial(5));


// function isPrime(n, i=2){
//     if(n<=1){
//         return true
//     }
// }

function fibonacci (n, nemo = {}){
    if(n <= 1) return n;

    

}