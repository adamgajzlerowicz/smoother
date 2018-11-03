import { CommandName } from '../../../../types';

const updateData = (socketData) => Object
    .keys(socketData)
    .map((item: CommandName) => ({
        content: socketData[item],
        source: item
    })
    ).filter(item => !!item.content);

export {
    updateData,
};
