📍Object-Oriented Programming - another way to write our code

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
