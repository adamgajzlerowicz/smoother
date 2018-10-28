import { io } from './socket';
import { Socket } from './types';

import { gitCommand, anyCommand, replaceCommand } from './commands';
import { makeCommand as getMakeCommand } from './commands/commandService';
import * as config from '../../../config.json';

import { Event, SocketMessage } from '../../types';

const main = async () => {
  io.on(Event.CONNECTION, async function (socket: Socket) {
    const makeCommand = getMakeCommand(socket);

    socket.emit(SocketMessage.config, config);

    socket.on('gitCommand', ({ name, payload: { path, branch, pull = false } }) => {
      makeCommand({
        command: gitCommand(path, branch, pull),
        name,
      });
    });

    socket.on('anyCommand', ({ name, payload: { command } }) => {
      makeCommand({
        command: anyCommand(command),
        name,
      });
    });

    // TODO change names to constants

    socket.on('replaceCommand', ({ name, payload: { path, replacer, replacee } }) => {
      makeCommand({
        command: replaceCommand(path, replacer, replacee),
        name,
      });
    });

  });
}

main();
