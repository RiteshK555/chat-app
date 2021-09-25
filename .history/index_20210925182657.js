const express=require('express');
const res = require('express/lib/response');
const app = express();
const http = require('http');
const server=http.createServer(app);
const { Server }=require("socket.io");
const io=new Server(server);
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})
// app.get('/styles.css',(req,res)=>{
// res.sendFile(__dirname+'/styles.css');
// })
app.use(express.static(__dirname))
io.on('connection',(socket)=>{
    console.log('connected');
    socket.on('disconnect',()=>{
        console.log('disconnected');
    })
    socket.on('message',(msg)=>{
        console.log(msg);
        io.emit('')
    })
})
server.listen(3000,()=>{
    console.log('listening on port 3000')
})