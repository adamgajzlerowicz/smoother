import { exec } from './commandService';

const gitCommand = (path, branch, pull = true) => () => {
    const commands = [];
    commands.push(`cd ${path}`);
    commands.push(`git checkout ${branch}`);

    if (pull) {
        commands.push('git pull');
    }

    const child = exec(commands.join('&&'));
    return child;
};

export {
    gitCommand,
};



