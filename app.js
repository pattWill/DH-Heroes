const express = require('express');
const app = express();

app.listen(3030, ()  => console.log('Levantando un servidor con Express'));

app.get('/home', (req, res) => { 
    res.sendFile(path.join(__dirname, '/views/index.html'));
    ;
 });
 