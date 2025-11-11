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
📍Convert type of variables:

```javascript
Number(variable);   //converts the variable into number
String(variable);   //converts the variable into string
```
