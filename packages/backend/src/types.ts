import { Config, Message, CommandName, SocketMessage } from '../../types';

type callback = (payload) => void;

interface Socket {
   on: (event: CommandName, callback) => void,
   emit: <T>(name: SocketMessage, payload: T) => void
};

const identity = <T>(arg: T): T => {
    return arg;
}

export {
    Socket,
};
