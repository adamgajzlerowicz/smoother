import { CommandName, SocketMessage } from '../../types';

type callback = (payload) => void;

interface Socket {
   on: (event: CommandName, callback) => void,
   emit: <T>(name: SocketMessage, payload: T) => void
};

export {
    Socket,
};
