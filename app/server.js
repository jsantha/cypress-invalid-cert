const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');

const options = {
    key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem'))
};

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/cached', (req, res) => {
    res.setHeader('Cache-Control', 'public, max-age=604800');
    res.send({});
})

https.createServer(options, app).listen(3000, () => console.log('Listening on https://localhost:3000'));
http.createServer(app).listen(3001, () => console.log('Listening on http://localhost:3001'));
