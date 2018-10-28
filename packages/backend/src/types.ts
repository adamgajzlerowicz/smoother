import { CommandName, SocketMessage } from '../../types';

interface Socket {
   on: (event: CommandName, callback) => void,
   emit: <T>(name: SocketMessage, payload: T) => void
};

export {
    Socket,
};
