<h2>Backend</h2>  <h4>another computer that manages the data for a website.</h4>
<hr>

<h3>Requesting data</h3>

✔️Our computer sends the information to the backend using **HTTP** (HyperText Transfer Protocol).

✔️To *create* a HTTP message, we use `XMLHttpRequest` built-in class:
```javascript
const xhr = new XMLHttpRequest();   //new HTTP message (request) to send to the backend
```
✔️To *setup* the request:
```javascript
xhr.open(/*type of HTTP message*/, /*where to send*/);
```
Parameters:
<ol>
  <li>Types of requests:
    <ul>
      <li>GET - get some information from the backend</li>
      <li>POST - create something (lets us send data to the backend)</li>
      <li>PUT - update something</li>
      <li>DELETE - delete something</li>
    </ul>
  </li>

  <li>To locate the place for sending request, we use URL (Uniform Resource Locator). Like an address in the Internet, it helps us to locate another computer on the Internet.</li>
</ol>

✔️To *send* the message to the address:
```javascript
xhr.send();
```

✔️To *get* the response from the backend:
```javascript
xhr.response;
```

❗Arrival of response takes some time, so:
```javascript
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});
//code will wait for response to LOAD, then get it

xhr.open('GET', 'url');
xhr.send();
```
❗We need to request after we add 'load' Event Listener to the message
<hr>

<h3>Request - Response Cycle:</h3>
<img width="541" height="180" alt="image" src="https://github.com/user-attachments/assets/bf05fe99-e811-4a0f-8569-9165370253fc" />

<H3>Status Code</H3>
With a response, backend gives a Status code, which tells us if a request failed or succeeded.

<ol>
  <li>Starts with 4(our problem) or 5(backend's problem) - 400, 404, 500 = failed</li>
  <li>Starts with 2 = 200, 201, 204 - succeeded</li>
</ol>

<h3>Response Data Types</h3>
The backend can response with different types of data:

<ul>
  <li>Text</li>
  <li>Imgae</li>
  <li>JSON</li>
  <li>HTML</li>
</ul>


<h3>API</h3>
Application Programming Interface - ways to interact with a backend

<h3>Promises</h3>

✔️Better way to handle asynchronous code (similar to `done()` function)

✔️Let us wait for some code to finish, before going to the next step

✔️`Promise()` is a built-in class:
```javascript
new Promise(/*function*/);
```
✔️It runs this inner function immediately.

✔️`resolve()` function lets us control when to go to the next step:

```javascript
new Promise((resolve) => {
  function1(() => {      //callback function
    resolve();    //waits for function1 to end, then continues to the next step
  });
}).then(() => {
  /*next step code*/
});
```
❗We use Promises, because multiple callbacks cause a lot of nesting:
```javascript
new Promise((resolve) => {
  function1(() => {
    resolve();
  });
}).then(() => {
  return new Promise((resolve) => {
    function2(() => {
      resolve();
    });
  });
}).then(() => {
  /*code*/
});
```
✔️We can give a value to `resolve`:
```javascript
new Promise((resolve) => {
  function1(() => {
    resolve('value1');
  });

}).then((value) => {     //value1 is saved in this parameter
  return new Promise((resolve) => {
    function2(() => {
      resolve();
    });
  });

}
```

📍Running multiple promises at the same time:
```javascript
Promise.all();
```
✔️It waits for all of them to finish

For example:
```javascript
Promise.all([
  new Promise((resolve) => {
    function1(() => {
      resolve('value1');
    });
  }),
  new Promise((resolve) => {
    function2(() => {
      resolve('value2');
    });
  })

]).then((values) => {    //value1 and value2 are saved in this parameter
  /*code*/
});

//running function1 and function2 at the same time
```

<hr>

<h3>Fetch()</h3>

better way to make HTTP requests.

✔️`XMLHttpRequest()` uses Callback, `fetch()` uses Promises.
```javascript
function function1() {
  fetch(/*url*/).then((response) => {  //response is saved in the parameter
    response.json();   //to get the data attached to the response
  });
}
```
✔️`response.json()` returns a Promise, so it is asynchronous (we need to wait for it to finish)

```javascript
function function1() {
  fetch(/*url*/).then((response) => {
    return response.json();
  }).then((data) => {      //response.json() is saved in data parameter
    /*code*/
  });
}
```
✔️Data is in array format.

✔️Sending data to the backend:
```javascript
fetch(/*url*/, {
  method: 'POST',
  headers: {           //giving more information about data
    'Content-Type': 'application/json'      //data will be sent in json format
  },
  body: JSON.stringify({       //contains actual data (in json format) 
    object: object1
  })
});

const data = response.json();
```
<hr>

<h3>Async Await</h3>

even better way to handle asynchronous code.

✔️Async await is a shortcut for promises.

✔️`async` makes a function return a promise:
```javascript
async function function1()  {
  /*code*/
}
//because function1 returns a promise, we can write next code like this:
function1().then(() => {
  /*next step code*/
});
//it will run function1 and create the next code with it
```
The value returned in the first function, will be saved in the parameter of the next one:
```javascript
async function function1() {
  /*code*/
  return 'value1';
}
function1().then((value) => {    //value1 is saved in value parameter
  /*next step code*/
});
```
✔️`await` lets us wait for a promise to finish, before going to the next line:
```javascript
//instead of creating new Promise().then() like we write
await function2();
```
It lets us write asynchronous code like normal code.

✔️The value of `resolve` will be returned to `await` promise, so we can save it to a variable:
```javascript
const value = await new Promise((resolve) => {
  loadCart(() => {
    resolve('value2');    //value=value2
  });
});
```

❗We can only use `await`, when we're inside of the `async` function.
<hr>

<h3>Error Handling</h3>

📍Handling unexpected errors:

When we're sending HTTP requests, we can get unexpected errors.

✔️In Callbacks, we set up a separate callback just for errors:
```javascript
//we add to the function:
xhr.addEventListener('error', (error) => {   //error info saved in this parameter
  /*error handling code*/
});
```
✔️In Promises, we use `catch()` method:
```javascript
.catch((error) => {    //error info saved in this parameter
  /*error handling code*/
});
```
✔️In Async, we use `try`/`catch`:
```javascript
try {
  await function1();
  /*code that can cause an error/*
} catch(error) {     //error info saved in this parameter
  /*error handling code*/
}
```
❗`try`/`catch` is used not only with async await, also with synchronous (normal) code.

❗Whenever we get error, it will skip the rest of the code.

📍Error creating:

We can manually create an error.

✔️Inside the Async:
```javascript
try {
  throw 'error1';     //because we have an error, code after this will be skipped
  /*code*/
} catch(error) {     //error1 is saved into this parameter
  /*error handling code*/
}
```
✔️Inside a Promise:

1️⃣th way:
```javascript
const value = await new Promise((resolve) => {
  throw 'error2';
  loadCart(() => {
    resolve();    
  });
});
```
2️⃣nd way - if we need to create an error in the future:
```javascript
const value = await new Promise((resolve, reject) => {
  loadCart(() => {
    reject('error3');
    resolve();    
  });
});
```
`reject()` is a function. It lets us create an error in the future.
