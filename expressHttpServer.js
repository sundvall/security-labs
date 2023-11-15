const path = require("path");
const express = require("express");
const app = express();
const bodyparser = require('body-parser');
const port = 3333;

// serve content from the 'public' folder
// The path module allows us to generate absolute paths, which you need to serve static assets.
app.use(express.static(path.join(__dirname, "public")));

// Middleware to print content of post request
app.use(bodyparser.urlencoded({extended: false}));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

// The console is the context where this server is started, i.e. bash or cmd
// GET /foo?msg=hello ---> {msg: 'hello'}
app.get('/foo', function (req, res) {
  console.log('get request:query:', req.query);
  res.sendFile(`${__dirname}/public/foo.txt`);
});

// POST msg=hello ---> {msg: 'hello'}
app.post('/bar', function (req, res) {
  console.log('url:', req.url);
  console.log('post request: requestbody:', req.body);
  console.log('post query: :', req.query);
  res.sendFile(`${__dirname}/public/index.html`);
});
