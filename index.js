const httpServer = require('http');
const url = require('url');
const fs = require('fs');
const express = require('express');

const tempLoan = fs.readFileSync(
    `${__dirname}/data/data.json`,
    'utf-8'
);
//Template
const templateHTMLCourse = fs.readFileSync(
    `${__dirname}/template/templateLoan.html`,
    'utf-8'
);
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(templateHTMLCourse);

//Create Server
// const replaceTemplate = require('./modules/TemplateLoan');

// const tempCourse = require('./data/data.json');
// const app = express();
// //Sending the whole request back to the client
//  app.get('/',function(req, res){
//     res.send('Hi There');
//  });
    
//     const PORT = 8000;
//     app.listen(PORT, function() {
//         console.log(`The server is running the port ${PORT}`);
//     });
//const { monitorEventLoopDelay } = require('perf_hooks');
const dataObj = JSON.parse(tempLoan);// string to JavaScript Object JSON

const server = httpServer.createServer(function(req, res) {
    const {query, pathname} = url.parse(req.url, true); // object distructors
    if(query.id){
        // if there is query parameter named id read as string
        // Courses page
        if (pathname === '/' || pathname.toLowerCase() === '/loan') {
            res.writeHead(200, {// Every thing ran successfully
                'Content-type': 'text/html'
            });
            const loan = dataObj[Number(query.id)];// convert string to numeric value
            //console.log(loan.interest);
            const courseHTML = replaceTemplate(templateHTMLCourse, loan);
            
            res.end(courseHTML);
        }
    }
    else{
            res.writeHead(404, {// Server did not find what you were looking for
                'Content-type': 'text/html'
            });
            res.end(`resource not found`)
        }
});
//Start listening to requests
server.listen(8000, 'localhost', () => {
console.log('Listening to request on port 8000');
});
//=> is called fat arrow function or lamda