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
