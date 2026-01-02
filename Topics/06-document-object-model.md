📍Document Object Model

✔️Document is a built-in object.

✔️The `document` object represents/models the webpage.

✔️DOM combines JavaScript and HTML together and gives Javascript the control.
<hr>
Properties:

1) Title
```javascript
document.title  //gives us the title of webpage
```
We can change the title with it:
```javascript
document.title = '...';
```

2) Body
```javascript
document.body  //it gives us the body (html code) of the webpage

document.body.innerHTML  //controls all the html inside the body

document.body.innerText  //controls the text of an element

document.body.value  
```
We can change all the code in the body with innerHTML:
```javascript
document.body.innerHTML = '/*code*/';
```
*Every html element has .innerHTML


<hr>
Methods:

1) querySelector()

```javascript
document.querySelector()
//lets us get any element from the page and put it inside Javascript:

document.querySelector('button');  /*gets the first button element*/

```
We can select exact element by using class attribute:
```javascript
<button class="button1">Hello</button>

document.querySelector('.button1');
```
We can get all elements of the same class:
```javascript
document.querySelectorAll(/*class*/);
```

2) addEventListener()
```javascript
element.addEventListener(/*event*/, /*function*/);

//For example:
buttonELement.addEventListener('click', () => {
  console.log('click');
});
```
✔️Every html element has .addEventListener

✔️Does the same thing as the `onclick` attribute.

✔️We can add multiple listeners to one event.

✔️We can remove a listener:
```javascript
element.removeEventListener(/*event*/, /*function*/);
```
