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

📍Auto-Boxing:

Javascript automatically wraps strings and other types into a box like an object. That's why strings also have methods and properties:
```javascript
'hello'.length          //property
'hello'.toUpperCase()   //method
```
