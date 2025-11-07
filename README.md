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

📍Math.random(): Generates random number between 0 and 1

<hr>

