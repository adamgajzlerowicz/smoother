import { Event, StreamResult, CommandName, SocketMessage, MessageType } from '../../../types';
import { Socket } from '../types';
// @ts-ignore
import { spawn, exec } from 'child_process';

const makeCommand = (socket: Socket) => ({ command, name }: { command: any, name: CommandName }) => {
    const commandStream = command();

    commandStream.stdout.on(StreamResult.DATA, (data) => {
        socket.emit(SocketMessage.message, {
            content: `${data}`,
            source: name,
            type: MessageType.OUT,
        })
        console.log(`${data}`);
   });

    commandStream.on(StreamResult.CLOSE, (code) => {
        socket.emit(SocketMessage.message, {
            content: `child process exited with code ${code}`,
            source: name,
            type: code === 1 ? MessageType.ERROR : MessageType.END,
        });
    });

    commandStream.stderr.on(StreamResult.DATA, (error) => {
        socket.emit(SocketMessage.message, {
            content: `error: ${error}`,
            source: name,
            type: MessageType.ERROR,
        });
    });
}

export {
    makeCommand, exec, spawn,
};
