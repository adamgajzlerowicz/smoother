import { createServer } from 'http';


import * as socketIO from 'socket.io';

const server = createServer()
const io = socketIO(server)

server.listen(3080);

export {
    io,
    server
};

