const path=require('path');
const http=require('http');
const express=require("express");
const socketio=require("socket.io");
import {users,userJoin} from "./utils/users.js";
const app=express();
const server=http.createServer(app);
const io=socketio(server);

app.use(express.static(path.join(__dirname,'public')));
io.on("connection",socket=>{
    socket.on("newuser",(user)=>{
         const u = userJoin(user);
         console.log(users);
    });
    socket.emit("message","Hello");
    socket.on("chatMessage",(msg)=>{
       socket.broadcast.emit("message",msg);
       console.log("hey there");
    })
})








var PORT=3000||process.env.PORT;

server.listen(PORT,()=>console.log(`server running on port ${PORT}`));