import { exec } from './commandService';

const replaceCommand = (path, replacer, replacee) => () => {
    console.log(path, replacer, replacee);
    const commands = [];
    commands.push(`ls`);

    const child = exec(commands.join('&&'));
    return child;
};

export {
    replaceCommand,
};
