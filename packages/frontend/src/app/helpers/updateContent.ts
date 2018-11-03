import { Message } from './../../../../types';
import { SocketDataType } from '../types';

const updateContent = (state: SocketDataType, message: Message): SocketDataType => {
    const updatedMessages = state[message.source]
        ? [...state[message.source], message]
        : state[message.source] = [message];

    return {
      ...state,
      [message.source]: updatedMessages
    };
}

export {
    updateContent,
};
