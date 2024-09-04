const inputString = 'JavaScript is an Amazing language';
let count = 0;

for (let i = 0; i < inputString.length; i++) {
  if (inputString[i].toLowerCase() === 'a') {
    count++;
  }
}

console.log(`The letter 'a' appears times.`, count);
