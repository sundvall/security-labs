# Laboration to test XSS locally.
Raw html with script and local server to see cross-site-scripting occur.
The html is an unprotected form combined with direct insertion into the DOM.

<p>Intentionally unsecure html.</p>
<p>Do <strong>not</strong> copy these forms into any production code.</p>


## start local server
```javascript
npm start
```
or 
```javascript
node expressHttpServer
```

## url
open browser  
(tested in chrome)
- http://localhost:3333/
- open console in chrome devtools

## usage:

### send value to the DOM
Input anything into the form and hit a button. This will insert the form value into the output element without validation or sanitazion (except for the 'setHTML' command.)

### send value to the server
#### POST
 The default submit method will post the value to the server. 
#### GET
Add query parameters to get request "localhost:3333/foo?msg=[.... text ....]  
For example:
```
/foo?msg=hello ---> {msg: 'hello'}
```




