✔️External library - code that is outside of our project

✔️For using external library:

1️⃣In HTML file we add:
```html
<script src="..."></script>
```
2️⃣In JavaScript, we use the code in external library.

✔️Why we use external libraries:
<ul>
  <li>Let us share the code</li>
  <li>Save time</li>
  <li>Avoid duplicating work</li>
</ul>
<hr>

✔️Example:
 
 Day.js - date library:
 ```javascript
const today = dayjs();  //for today's date
const addDays = today.add(/*number*/, 'days');  //adding to today's date
addDays.format('dddd, MMMM D');   //Formating date --> Saturday, January 17
```
<hr>

📍ESM version(EcmaScript Module):

A version that works with JavaScript Modules.
```javascript
import dayjs from '/*url*/';
//or
import {...} from '/*url*/';
```
✔️Default export:
```javascript
export default functionName;

import functionName from '..';
```
*Each file can only have one default export.

✔️Named export:
```javascript
export functionName;

import {functionName} from '...';
```
