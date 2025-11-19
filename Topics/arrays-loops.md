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
[1, 'hello', true, {name: 'Sona'}, [1,2]]
//number. string, boolean, object, array
```
✔️Property and Methods:

Length of an array: 
```javascript
myArray.length   //count of values
```
Adding and removing value from an array:
```javascript
myArray.push(/*value*/)  //adds a value to the end
myArray.splice(/*index*/,/*number of values*/)    //removes a value(s)
```
Making copy of an array:
```javascript
const array2 = array1.slice()  
```
Filtering an array:
```javascript
myArray.filter(/*function*/);
//Creats a new array[]
//return true --> put value in array
//return false --> not put value in array

//For example:
[1, -3, 5].filter((value, index) => {
  return value >= 0;       //[1, 5]
});  
```
Transforming an array:
```javascript
myArray.map(/*function*/);
//Creates a new array[]
//Whatever we return --> add to new array

//For example:
[1, 1, 3].map((value, index) => {
  return value * 2;    //[2, 2, 6]
});
```

✔️Loop through an array:
```javascript
myArray.forEach(/*function*/);

//For example:
[firstValue,secondValue].forEach(function(/*value*/, /*index*/) {       
  /*code*/
});
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
*In `while` loop when using `continue`, must do increment step(i++) manually:
```javascript
let i = 0;
while (/*condition*/) {
  if (/*condition*/) {
    i++;   //increment step
    continue;
  }
  /*code*/
  i++;
}
```
