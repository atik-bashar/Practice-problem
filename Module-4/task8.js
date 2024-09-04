const str = 'Now i want to study the JavaScript Language';

const lowerStr = str.toLowerCase();

const vowels = 'aeiou';
let allVowelsPresent = true;

for (const vowel of vowels) {
  if (!lowerStr.includes(vowel)) {
    allVowelsPresent = false;
    break; 
  }
}

console.log(`The string contains all vowels:`,allVowelsPresent);
