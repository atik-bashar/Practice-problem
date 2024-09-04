// const numbers = [12, 98, 5, 41, 23, 78, 46];

// for(const num of numbers){
//     if(num %2 === 0) {
//         console.log(num);
//     }
//     else{
//         console.log('Odd number:', num);
//     }
// }



// output numbers print even numbers


const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers);

