const express=require('express');
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
io.on('connection',(socket))
server.listen(3000,()=>{
    console.log('listening on port 3000')
})