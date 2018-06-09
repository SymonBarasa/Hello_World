//Getters are used to get the property values inside of an object


//Create an object having properties. The object here is person the properties are name and age.

let person = {
  _name: 'Symon B',
  _age: 137,
 
 //The set syntax binds an object property to a function to be called 
 //when there is an attempt to set that property. 

// What the if statement does is that it checks whether the value assigned to age is a number
  set age (newAge) {
    if(typeof newAge==='number'){
      this._age = newAge; 
      console.log(`${newAge} is a valid input`);
    }
    else{
      console.log('Invalid input');//return 'Invalid input'
    }
    
  },
  
  //This getter here gets the values of the properties in the object
  get age(){
  console.log(`${this._name} is ${this._age} years old`);
    
}

};
console.log(person.age);

	person.age = 'Thirty-nine';
	person.age = 2; 
