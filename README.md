<h2>Hi there!</h2>
This repo includes my journey of learning JavaScript.
<hr>
•There are three ways to create a string:
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

•Concatenation(adding strings together). But when we add a string and integer together, it doesn't give an error. It recognises integer as string and combines them as <i>string</i>:
```javascript
'apple' + 3;  => 'apple3'
3 + 'apple';  => '3apple'
```
•Escape characters:
<ul>
  <li>
    \'  - for using single quotes inside single quote string
  </li>
  <li>
    \n  - for adding new line
  </li>
</ul>

