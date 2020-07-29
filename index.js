// const Person = require('./person');

// const person1 = new Person('SSN', 75);
// person1.greeting()

// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('message', data => console.log(`Called Listener:`, data))
// logger.log('Hello wordl')

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>HomePagr</h1>')
    }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server runnung on port: ${PORT}`))