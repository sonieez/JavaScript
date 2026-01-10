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

✔️Example:
 
 Day.js - date library:
 ```javascript
const today = dayjs();  //for today's date
const addDays = today.add(/*number*/, 'days');  //adding to today's date
addDays.format('dddd, MMMM D');   //Formating date --> Saturday, January 17
```
