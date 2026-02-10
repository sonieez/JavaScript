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

//Anonymous function(without name):
const function1 = function() {
  /*code*/
};
```
<hr>
📍Arrow Functions:

✔️Arrow functions almost do the same thing as regular functions.

```javascript
const arrowFunction = () => {
  /*code*/
};
```
✔️Differences: 

Arrow functions have shortcuts:

```javascript
const oneParam = (param) => {
  console.log(param);
};

//You can write it without parameter(if it has one parameter):

const oneParam = () => {
  console.log(param);
};
```
```javascript
const oneLine = () => {
  return 2 + 3;
};

//You can write it all in one line:

const oneLine = () =>  2 + 3; 
```
<hr>

📍Callback - a function to run in the future

For example:
```javascript
function function1(fun) {
  /*code*/
}

function function2() {
  /*code*/
}
```
To run `function2` after `function1` is finished:
```javascript
function1(function2);
```
✔️Here `function2` is callback, because we use it as parameter to run in the future.

✔️We can use this like `function1` - our http request and `function2` - some code we need to run after getting response.

✔️Callback can be any function - arrow or ordinary function:
```javascript
function1(() => {
  function2();
  function3();
  function4();
  /*code*/
});
```
