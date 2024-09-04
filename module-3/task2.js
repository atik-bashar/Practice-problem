let sum = 0; 
let count = 1;

while (true) {  
  sum += count;  
  if (sum >= 100) {  
    console.log(`Sum has reached or exceeded 100:`, sum);
    break;  
  }
  count++;  
}

