const http = require('http');
const fs = require('fs');
const log4js = require('log4js');
const about = require('./WWW/about.json');

const logger = log4js.getLogger();
logger.level = 'debug';

http.createServer((request, response) => {

    if (request.url) {

        // .json response for the team members
        if (request.url == '/about') {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.write(JSON.stringify(about));
        } else {
            const file = request.url == '/' ? './WWW/index.html' : `./WWW${request.url}`;
            fs.readFile(file, (err, data) => {
                if (err) {
                    response.writeHead(404, { "Content-Type": "text/html" });
                    logger.warn(`NOT FOUND ${request.method} ${request.url}`)
                    response.write("NOT FOUND");
                } else {
                    logger.info(`${request.method} ${request.url}`);

                    if (file.split('.').pop() == 'jpg')
                        response.writeHead(200, { "Content-Type": "image/jpg" });
                    else if (file.split('.').pop() == 'css')
                        response.writeHead(200, { "Content-Type": "text/css" });
                    else
                        response.writeHead(200, { "Content-Type": "text/html" });
                    response.write(data);
                }
                response.end();
            });
        }

    }
}).listen(4000);
