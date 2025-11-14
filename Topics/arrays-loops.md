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
```
