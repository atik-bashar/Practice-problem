// sub task 1

let i = 81;
let sum = 0;

while(i<=131){
    i++;
    if(i%2 !== 0){
        sum += i;
    }
}

console.log('Print Odd number sum:', sum)

// sub task 2

let n = 81;
let sum1 = 0;

while(n<=131){
    n++;
    if(n%2 === 0){
        sum1 += n;
    }
}

console.log('Print Even number sum:', sum1)