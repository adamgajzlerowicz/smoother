import { spawn } from './commandService';

const lsCommand = (path, branch, pull = true) => {
    const child = spawn('node', ['/Users/adam/projects/lerna-repo/packages/mockEmiter/index.js']);
    return child;
};

export {
    lsCommand,
};
