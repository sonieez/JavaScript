<h2>Hi there!</h2>
This repo includes my journey of learning JavaScript.
<hr>
📍There are three ways to create a string:
<ol>
  <li>
    single quotes(' ')
  </li>
  <li>
    double quotes(" ")
  </li>
  <li>
    backtick symbol(` `) named <i>template string</i>
  </li>
</ol>
The first and the second do the exact same thing. 

But backtick symbol has some features:
<ul>
  <li>
    You can write <i>multi-line strings</i> with it
  </li>
  <li>
    <i>Interpolation</i> (like format string in python) - for adding variable:  ${ } 
  </li>
</ul>
<hr>
📍Concatenation(adding strings together):

```javascript
'some' + 'text'; ==> 'sometext'
//'+' combines them without a space
```

But when we add a string and integer together, it doesn't give an error. It recognises integer as string and combines them as <i>string</i>:
```javascript
'apple' + 3;  ==> 'apple3'
3 + 'apple';  ==> '3apple'
```

<hr>
📍Escape characters:
<ul>
  <li>
    \'  - for using single quotes inside single quote string
  </li>
  <li>
    \n  - for adding new line
  </li>
</ul>
<hr>

📍To create a popup in the website:
```javascript
alert('This is a popup');
```
<hr>
📍For loading JavaScript inside an HTML file: 

```html
<script>
  alert('hello');
</script>
```
<hr>
📍Comment:

```javascript
//This is a comment.

/*This is a
  multi-line
  comment.
*/
```
<hr>

📍To write commands for console in the website:
```javascript
console.log('hello');
```
<hr>

📍To create a variable:
```javascript
let variable = 2;
let message = 'hello';
//Later we can change its value
variable = 3;
```

```javascript
const variable = 3;
//We can't change its value, it is constant. 
```

```javascript
var variable = 3;
/*In new javascript codes var is not used.
But we can see it in older javascript codes.*/
```
✔️Use `const` by default.

✔️Use `let` if you have to change a variable later.

<hr>
Variable name restrictions:
<ol>
  <li>Can't use special words (Example: let)</li>
  <li>Can't start with a number (Example: 2name)</li>
  <li>Can't use special characters (except $ and _ ) and space (Example: my name/ name@#)</li>
</ol>
<hr>

📍Naming Conventions:
<ul>
  <li>camelCase = myName (most used in JavaScript)</li> 
  <li>PascalCase = MyName</li>
  <li>kebab-case = my-name (used in HTML and CSS and file names</li>
  <li>snake_case = my_name (used in other languages)</li>
</ul>
<hr>

📍To get the type of variable/symbol:
```javascript
typeof 3; //number
typeof 'hello'; //string
```
<hr>
📍Booleans: A boolean value represents if something <b><i>true</i></b> or <b><i>false</i></b>.

✔️Falsy values(behaves like false) :
<ul>
  <li>false</li>
  <li>0</li>
  <li>'' (empty string)</li>
  <li>NaN (Not a Number)</li>
  <li>undefined (something doesn't have a value)</li>
  <li>null</li>
</ul>
✔️Other values are truthy values(behaves like truth)
<hr>
📍Comparison operators:
<ul>
  <li> > greater than</li>
  <li> < less than </li>
  <li> >= greater than or equal to</li>
  <li> <= less than or equal to</li>
  <li> === equal to</li>
  <li> == equal to (but it converts them to same type to check)</li>
  <li> !=== not equal to</li>
</ul>
✔️Use === instead of ==
<hr>
📍Logical Operations:
<ul>
  <li> and --> &&</li>
  <li> or  --> || </li>
  <li> not  --> ! </li>  
</ul>
<hr>
    
📍If statements:
```javascript
if (/*condition*/) {
  /*code*/
} else if{
  /*code*/
} else {
  /*code*/
}
```
✔️Any variable we create inside {...} will only exist inside the {...}. Because, inside the {} there is a scope. 

✔️Shortcuts for If statements (We can save them in a variable):
<ol>
  <li>Ternary Operator ?: </li>
  <li>Guard Operator && 
  
  If the condition is false, it will stop early and won't run the code on the right(Short-Circuit Evaluation). Value will be false automatically.</li>
  <li>Default Operator ||
  
  If the first condition is true, it will stop early and won't run the code on the right(Short-Circuit Evaluation). Value will be true automatically.
  
  If the first condition is false, it won't stop early, variable will have the second value.</li>
</ol>

```javascript
/*1*/ const variable = /*condition*/ ? /*if code*/ : /*else code*/;
/*2*/ const variable = /*condition*/ && /*code*/;
/*3*/ const variable = /*value(condition)*/ || /*value(condition)*/;
```
<hr>
📍Math.random(): Generates random number between 0 and 1

<hr>

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
<hr>

📍Objects

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
