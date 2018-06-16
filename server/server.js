const path = require('path');

const publicpath =  path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

const express = require('express');

var app = express();

app.use(express.static(publicpath));

 app.listen(port, () => {

        console.log(`Started on port: ${port}`);
 })