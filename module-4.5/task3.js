var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

var concatenatedString = '';

for (const name of numbers) {
    concatenatedString += name + ''; 
  }
  
  concatenatedString = concatenatedString.trim();
  console.log(concatenatedString); 