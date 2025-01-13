/* 
    1. Include the HTTP module
*/
const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request,response) {
    if (request.url === '/'){
        fs.readFile('./index.html', function (err, data) {
            if (err) {
                response.end('file not found.');
                console.log('error loading index.html')

                return;
            }

            response.writeHead(200, {"Content-Type": 'text/html'})
            response.write(data)
            response.end();
        })
    } else if (request.url === '/about'){
        fs.readFile('./about.html', (err, data) => {
            if (err) {
                response.end('file not found')
                console.log('error loading about.html')
            
                return;
            }

                response.writeHead(200, {"Content-Type": 'text/html'})
                response.write(data)
        })
    } else if (request.url === '/data') {
        response.setHeader("Content-Type", "application/json");
        const obj = {name: 'colin', classes: ['node', 'react', 'html/css']};
        JSON.stringify(obj)
        response.end(JSON.stringify(obj));
    } else {
        fs.readFile('./error.html', (err, data) => {
            if (err){
                response.end('file not found')
                console.log('error loading error')
            
                return;
            }
        })
        response.end('404, brain not found')
    }
});

function createServer(func) {
    const request = someMagicColinDoesNotUnderstandToListenToServers();
    const response = {
        write: function() {
            doSomeSendingOfData();
        },
    }
}

const PORT = 3000;

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
/*
    7. Include the file system module
*/

/* 
    2. Create a server object
*/

/* 
    3. Handle alternate web page requests
*/

/*
    5. Handling errors
*/

/*
    6. Respond to the client in JSON
*/

/*
    8. Respond to the client in HTML
*/

// 8a. set up response to localhost:3000/

// 8b. read the index.html file

// 8c. if there is no index.html file

// 8d. set the metadata to reflect html file type

// 8e. write up the file being read

// 8f. end the response

/*
        9. Set up for localhost:3000/about
      */

// 9a. read the about.html file

// 9b. if there is no about.html file

// 9c. set the metadata to reflect html file type

// 9d. write up the file being read

// 9e. end the response

/*
        10. Set up for localhost:3000/anything-else
      */

// 10a. read the error.html file

// 10b. if there is no error.html file

// 10c. set the metadata to reflect html file type

// 10d. write up the file being read

// 10e. end the response

/* 
    4. Allow the server to begin listening for requests
*/
