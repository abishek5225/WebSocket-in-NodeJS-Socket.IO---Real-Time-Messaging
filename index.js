const express = require('express');
const { log } = require('node:console');
const {createServer}= require('node:http')

const app = express();
const server = createServer(app);

app.get('/', (req, res)=>{
    res.send('<h1>Hello World!</h1>')
})

server.listen(3500, ()=>{
    console.log('Server is running on port http://localhost:3500')
})