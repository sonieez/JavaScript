📍Functions:

✔️A function lets us reuse the code

To create a function:
```javascript
function functionName() {
  /*code*/
}

//To execute the code we need to call the function
functionName();
```
Return statement:
```javascript
function functionName() {
  ...
  return /*value*/;
}

functionName();
//When the function is called, value will be out of the function.
```
✔️Return statement gets a value out of the function.

✔️Return statement ends function.

✔️If we don't write anything after return, it will return `undefined`

Parameter:
```javascript
function functionName(parameter) {
  /*code*/
}

functionName(/*value*/); 
//Our value is put into function as parameter.
```
✔️Parameter puts a value into the function.

✔️Value written inside called function is also called argument.

✔️Functions are also values. We can store it in a variable:
```javascript
cosnt function1 = function name() {
  /*code*/
};
```
