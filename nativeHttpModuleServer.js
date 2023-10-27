const http = require('http');
const host = 'localhost';
const port = '8000';
// We import the promise variant in keeping with modern JavaScript best practices. We use promises as its syntactically more succinct than callbacks, which we would have to use if we assigned fs to just require('fs'). To learn more about asynchronous programming best practices, you can read our How To Write Asynchronous Code in Node.js guide.
const fs = require('fs').promises;
// Comments retreived from tutorial: 
// https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module

/**
 * type RequestListener = (req: IncomingMessage, res: ServerResponse) => void;
 * IncommingMessage:
 * 
 * 
 * 
 * The function would usually be named based on what it does. For example, if we created a request listener function to return a list of books, we would likely name it listBooks
 * @param {*} req:IncomingMessage The HTTP request the user sends is captured in a Request object
 * @param {*} res The HTTP response that we return to the user is formed by interacting with the Response object
 */
const returnBasicFormListener = (req, res) => {
    console.log('url:',
        req.url);
    // The special variable __dirname has the absolute path of where the Node.js code is being run
     fs.readFile(`${__dirname}/index.html`).then( (content)=> {
        res.setHeader("Content-type", "text/html");
        res.writeHead(200);
        res.end(content);
        }        
    ).catch(err=>{
        // handle readFile error
        res.writeHead(500);
        res.end(err);
        return;
    });
};

// This server accepts HTTP requests and passes them on to our [request]Listener() function.
const server = http.createServer(returnBasicFormListener);
server.listen(port, ()=> console.log('server is running port:', port));