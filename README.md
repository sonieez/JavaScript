<h2>Hi there!</h2>
This repo includes my journey of learning JavaScript.

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

```html
<button onclick=" <!--code--> "></button>  
<input onkeydown=" <!--code--> ">
```
<hr>
📍Comment:

```javascript
//This is a comment.

/*
This is a
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
  <li> !== not equal to</li>
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

📍Html inside Javascript:

```javascript
const html = `<p>${variable}</p>`;
```
<hr>
📍setTimeout():

✔️Allows us to run a function in the future.

```javascript
setTimeout(/*function*/, /*time in milliseconds*/);
```
<hr>
📍setInterval():

✔️Keeps running the code with an interval
```javascript
setInterval(/*function*/, /*time in milliseconds*/);
```
✔️There is an ID that setInterval() returns. We can stop setInterval() with it:
```javascript
const intervalID = setInterval(...);

//To stop the setInterval:
clearInterval(intervalID);
```
<hr>
📍Data Attribute:

✔️HTML attribute

✔️allows us to attach any information to an element

✔️starts with `data-`:

```html
<button data-product-name=" <!--information--> "> </button>
```
✔️To get the data --> `dataset`:

```javascript
button.dataset.productName
//product-name --> productName
```
<hr>

📍Radio selector:
```html
<input type="radio" name="name1">
```
❗If there are two or more radio selectors and their name are the same --> you can select only one. If they have different names --> you can select multiple:
```html
<input type="radio" name="name1">
<input type="radio" name="name1">
<!-- You can select only one-->

<input type="radio" name="name1">
<input type="radio" name="name2">
<input type="radio" name="name3">
<!-- You can select how many you want-->
```
<hr>

📍MVC (Model - View - Controller):

Split our code into 3 parts:

1️⃣Model = saves and manages the data

2️⃣View = takes the data and displays it on the page

3️⃣Controller = runs some code when we interact with the page

✔️MVC makes sure the page always matches the data.

✔️MVC is a design pattern.

<hr>

📍Changing URL:
```javascript
window.location.href = /*url*/;
```
<hr>

📍URL parameters:

✔️Lets us save data directly in the URL.

✔️Adding URL parameter - adding `?` to the url.

✔️Parameter is *property-value* pair. For example:
```javascript
?dataId=123
//dataId: 123 --> like an object
```
