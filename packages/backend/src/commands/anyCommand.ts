import { exec } from './commandService';

const anyCommand = (command) => () => exec(command);

export {
    anyCommand,
};

