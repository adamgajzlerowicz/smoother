import { Message } from './../../../../types';
import { SocketDataType } from '../types';

const updateContent = (state: SocketDataType, message: Message): Message[] => {
    const result = state[message.source]
        ? [...state[message.source], message]
        : state[message.source] = [message];
    return result;
}

export {
    updateContent,
};
