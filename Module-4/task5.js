let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for(const key in myObject){
    if (myObject.hasOwnProperty(key)) { 
      const value = myObject[key];
      console.log(`Key: ${key} |  Type: ${typeof value}`);
    }
  }