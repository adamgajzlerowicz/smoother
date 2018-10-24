
import { CommandName } from '../../../../types';

const updateData = (socketData) => Object
  .keys(socketData)
  .map((item: CommandName) => ({
    content: socketData[item],
    source: item
  })
  ).filter(item => !!item.content);

const updateContent = (state, message) => {
  return state[message.source]
    ? [...state[message.source], message]
    : state[message.source] = [message];
};

export {
  updateData,
  updateContent,
};
