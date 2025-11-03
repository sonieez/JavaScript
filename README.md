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
📍Booleans: A boolean value represents if something <b><i>true</i></b> or <b><i>false</i></b>
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

📍If statements:
```javascript
if (/*condition*/) {
  /*code*/
} else if{
  /*code*/
} else{
  /*code*/
}
```
✔️Any variable we create inside {...} will only exist inside the {...}. Because, inside the {} there is a scope. 

✔️Shortcuts for If statements:
<ul>
  <li>Ternary Operator ?:</li>
  <li>Guard Operator &&</li>
  <li>Default Operator ||</li>
</ul>
<hr>
📍Math.random(): Generates random number between 0 and 1

<hr>
📍Logical Operations:
<ul>
  <li> and --> &&</li>
  <li> or  --> || </li>
  <li> not  --> ! </li>  
</ul>
<hr>
