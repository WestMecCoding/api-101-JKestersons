const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world');
 });

 app.listen(port, () => {
    console.log(`sever is listening on port${port}`);
 });

 app.get('/zero', (req, res) => {
    res.send('help me');
 });