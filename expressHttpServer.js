const path = require("path");
const express = require("express");
const app = express();
const bodyparser = require('body-parser');
const port = 3333;

// serve content from a 'public' folder
// The path module allows us to generate absolute paths, which you need to serve static assets.
app.use(express.static(path.join(__dirname, "public")));

// Middleware to print content of post request
app.use(bodyparser.urlencoded({extended: false}));

app.get("/baz", (req, res) => {
  //   res.send({ message: "hello wwww" });
  // res.set("Content-Type", "application/json");
  const options = {
    // root: path.join(__dirname, "files"),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
      "Access-Control-Allow-Origin": "*",
      "Content-type": "text/html",
    },
  };
  res.sendFile(`${__dirname}/public/index.html`, options);
  // res.sendFile("index.html", options);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});






app.get('/foo', function (req, res) {
  // GET /foo?msg=hello ---> {msg: 'hello'}
  console.log('get request:query:', req.query);
});

app.post('/bar', function (req, res) {
  // POST msg=hello ---> {msg: 'hello'}
  console.log('url:', req.url);
  console.log('post request: requestbody:', req.body);
  console.log('post query: :', req.query);
  res.sendFile(`${__dirname}/public/index.html`);
});
