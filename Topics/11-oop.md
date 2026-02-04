📍Object-Oriented Programming (another way to write our code)

✔️Organizing our code into objects

✔️Function inside an object - method

```javascript
const cart = {
  cartItems: undefined,            //property

  loadFromStorage: function() {    //method
    /*code*/
  }
};
```
Shorthand Method Syntax:
```javascript
loadFromStorage() {    
    /*code*/
}
//instead of
loadFromStorage: function() {    
    /*code*/
  }
```
✔️'This' feature:
```javascript
const cart = {
  cartItems: undefined,            

  loadFromStorage() {    
    this.cartItems = JSON.parse(localStorage.getItem('cart'));
  }
};
//so that if we change our object name, our code works
```
❗Inside a method, 'this' points to outer object:
```javascript
const object = {
  method: () => {
    console.log(this);   //object
  }
};
```
❗Inside a function, 'this' = `undefined`. But we can change it:
```javascript
function logThis() {
  console.log(this);
}
logThis();     //undefined
logThis.call('hello');     //hello
```
❗Arrow functions do not change the value of 'this':
```javascript
const object3 = {
  method: () => {
    console.log(this);     //object

    [1,2,3].forEach(() => {
      console.log(this);    //object
    });
  }
};
```

✔️Function to create multiple objects:
```javascript
function Cart() {   //using PascalCase
  const cart = {    //creating object 
    /*code*/
  };

  return cart;
}

const cart = Cart();
```
<hr>

📍Class (object generator)

```javascript
class Cart {
  cartItems = undefined;   //property

  loadFromStorage() {    //method
    /*code*/
  }
  //no semicolon after methods (only after property)
  saveToStorage() {
    localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
  }
}
```
To generate an object from class:
```javascript
const objectName = new className();
```
✔️Each object created from class is called - Instance. To check whether an instance belongs to the class :
```javascript
objectName instanceof className;    
```

✔️Constructor - lets us run setup code
```javascript
constructor(/*parameter*/) {
  /*setup code*/
}

//for example:

constructor(localStorageKey) {
  this.localStorageKey = localStorageKey;
  this.loadFromStorage();
}
```
❗We shouldn't return anything in constructor method

✔️Private properties and methods:

```javascript
class Name {
  property1;  //public property - can be accessed outside the class
  #property2;  //private property - only can be accessed inside the class

  #function() {   //private method
    /*code*/
  }
}
 
```
<hr>

📍Inheritance (lets us reuse code between classes)

✔️We use it to get all the property and methods from the Parent class for Child class:
```javascript
class childClass extends parentClass {
  /*code*/
}
```
✔️Child class is a more specific type of Parent class.

✔️Calling constructor of Parent class:
```javascript
class childClass extends parentClass {
  /*code*/

  constructor(/*parameter*/) {
    super(/*parameter*/); //gets all information of constructor from Parent class
  }
}
```

<hr>
📍Built-in Classes (classes provided by the language)

✔️Date() --> generates an object that represents the current date
```javascript
const date = new Date();     //current date and time

date.toLocaleTimeString();   //gives the current time(h:m:s)
```
