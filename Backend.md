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
      <li>POST</li>
      <li>PUT</li>
      <li>DELETE</li>
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
