import { io } from './socket';
import { Socket } from './types';

import { gitCommand, anyCommand, replaceCommand } from './commands';
import { makeCommand as getMakeCommand } from './commands/commandService';

import { Event, SocketMessage, CommandName } from '../../types';

const main = async (config) => {
    io.on(Event.CONNECTION, async function(socket: Socket) {
        const makeCommand = getMakeCommand(socket);

        socket.emit(SocketMessage.config, config);

        socket.on(CommandName.gitCommand, ({ name, payload: { path, branch, pull = false } }) => {
            makeCommand({
                command: gitCommand(path, branch, pull),
                name,
            });
        });

        socket.on(CommandName.anyCommand, ({ name, payload: { command } }) => {
            makeCommand({
                command: anyCommand(command),
                name,
            });
        });

        socket.on(CommandName.replaceCommand, ({ name, payload: { path, replacer, replacee } }) => {
            makeCommand({
                command: replaceCommand(path, replacer, replacee),
                name,
            });
        });
    });
}


export {
    main,
};
