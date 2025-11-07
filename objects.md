📍Objects:

✔️An object groups multiple values together. That means our values can be any type(string, number, boolean etc).

Creating objects:
```javascript
const objectName = {
  property1: 'value1',
  property2: value2
};

//We can access value:
//1)Dot notation:
objectName.property1     /*this gives us value1*/
objectName.property2     /*this gives us value2*/

//2)Bracket notation: (does the same thing with dot notation)
objectName['property'];

//We can also change the value of property:
objectName.property1 = valueN   /*value of property1 will change to valueN*/

//We can add a new property:
objectName.newProperty = value3;

//We can also delete a property:
delete objectName.property;
```
✔️We use dot notation by default.

✔️We use bracket notation when dot notation doesn't work. For example:
```javascript
product.delivery-time  //we can't use dash sign with dot notation
product['delivery-time']

//Also we can a variable and calculation in bracket notation:
object['variable1']
object['value1' + 'value2']
```
✔️We can write object inside of an object. It is called nested object:
```javascript
const object1 = {
  property1: 'value1',
  property2: 'value2',
  object2: {
    property3: value3,
    property4: value4
  }
};
```
✔️We can write function inside of an object. Because, a function is another type of value.
```javascript
const objectName = {
  property1: function function1Name() {
    /*code*/
  }
}

objectName.property1();
```
✔️Function saved inside an object is called Method (Math.random/console.log)

✔️Built-in Objects - provided by the language
<hr>

📍JSON (JavaScript Object Notaion):

✔️JSON doesn't support single quotes and functions. Must use double quotes!!

✔️JSON is more universal. We use it when we atore and send data between computers.
```javascript
const jsonString = JSON.stringify(objectName);
//converts the object into JSON string

JSON.parse(jsonString);
//converts JSON string to object
```

📍localStorage:

✔️Save values more permanently. Since variables are temporary, when we refresh/close the page, all variables are deleted. That's why we use localStorage
```javascript
localStorage.setItem(/*name*/, /*value*/);
//saving string into localStorage

localStorage.getItem(/*name*/);
//gets the value out of localStorage
```
✔️localStorage only supports strings
