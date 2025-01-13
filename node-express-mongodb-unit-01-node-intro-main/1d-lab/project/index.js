const http = require('http');
const fs = require('fs');


const server = http.createServer((request,response) => {
    if (request === '/') {
        fs.readFile ('./index.html', (err, data) => {
            if (err) {
                response.end('Error reading index.html')
                console.log('Error reading index.html')
                
                return; 
            }
            
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        })
    } else if (request === '/projects') {
        fs.readFile ('./projects.html', (err, data) => {
            if (err) {
                response.end('Error reading 404.html')
                console.log('Error reading 404.html')
                
                return; 
            }
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        })
    } else {
        fs.readFile ('./error.html', (err, data) => {
            if (err) {
                response.end('Error reading 404.html')
                console.log('Error reading 404.html')
                
                return; 
            }
            response.writeHead(404, {'Content-type': 'text/html'})
            response.end(data);
        })
    }

})
    const PORT = 3001;

    server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

