import express from 'express'
import {createServer} from 'node:http'
import { fileURLToPath } from 'node:url';
import {dirname , join} from 'node:path';
import {Server} from 'socket.io'
import { log } from 'node:console';

const app = express();
const server = createServer(app);
const io= new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));
const __client = join(__dirname, 'client')

app.get('/', (req, res)=>{
    res.sendFile(join(__client, 'index.html'))
})

//implementing socket
io.on('connection', (socket)=>{
    console.log('a user connected');
})


server.listen(3500, ()=>{
    console.log('Server is running on port http://localhost:3500')
})