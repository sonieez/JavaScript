📍Arrays

✔️Array is another type of a value  (actually an object)

✔️Represents a list of values

```javascript
const myArray = [value1, value2, ...];
```
To get a specificed value in an array:
```javascript
myArray[/*index*/];

//We can change a value in the array with it:
const myArray = [10, 20, 30];
myArray[1] = 15;       //[10, 15, 30]
```
Array can include any type:
```javascript
[1, 'hello', true, {name: 'Sona'}, [1,2]
//number. string, boolean, object, array
```
✔️Property and Methods:
```javascript
myArray.length   //count of values

myArray.push(/*value*/)  //adds a value to the end
myArray.splice(/*index*/,/*number of values*/)    //removes a value(s)

const array2 = array1.slice()  //makes a copy of an array
```

Shortcut:
```javascript
const [firstValue, secondValue] = [1, 2];
//firstValue = 1, secondValue = 2
```
<hr>

📍Loops

✔️While loop:
```javascript
/*loop variable*/

while (/*condition*/) {
  /*code*/
  /*increment step*/;    
}

//For example:

let randomNumber = 0;
while (randomNumber < 0.5) {
  random.Number = Math.random()
}
```

✔️For loop:
``` javascript
for (/*loop variable*/; /*condition*/; /*increment step*/) {
  /*code*/
}

//For example:
for (let i = 1; i <= 5; i++) {
  /*code*/
}
```

Looping through an array:
```javascript
const myArray = ['first', 'second', 'third'];

for (let index = 0; index < myArray.length; index ++) {
  /*code*/
}
```
Features:

```javascript
break   //exit a loop early
continue  //skip an iteration
```
