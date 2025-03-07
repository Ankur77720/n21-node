const app = require('./src/app');


const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', socket => {

    console.log('New client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
    socket.on("some-event", (msg) => {
        console.log(msg)
        console.log("some-event occured");
        socket.emit('client-event',msg)
    })
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});