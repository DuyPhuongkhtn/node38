const express = require("express");
const { createServer } = require("http"); // tạo server
const { Server } = require("socket.io"); // tạo server socket

const app = express();
// khởi tạo server socketIO
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

// on: nhận event từ client
// emit: bắn event đi cho các client

// io -> server
// socket -> client
let demSo = 0;
io.on("connection", (socket) => {
    console.log(socket.id);

    // server bắn event cho tất cả client
    io.emit("send-id", socket.id);

    socket.on("disconnect", () =>{
        console.log(`User ${socket.id} rời kết nối`);
    });

    // B2: server nhận dc event của client
    socket.on("request-increment-number", () => {
        demSo = demSo +1;
        // server bắn đi cho tất cả các client
        io.emit("response-incre-number", demSo)
    });


})

// io.on("connection", (socket) => {

//     socket.on("join", (room) => {
//         socket.rooms.forEach(room => socket.leave(room))

//         socket.join(room);

//     });

//     socket.on("client-chat", (data) => {

//         // io.emit("data-chat", data);

//         io.to(data.room).emit("data-chat", data);

//     })

//     socket.on("disconnect", (reason) => {
//         console.log(socket.id, reason)
//     })


// });

httpServer.listen(8080);