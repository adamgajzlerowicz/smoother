import { validateConfig } from './config';

const successConfig = {
    "commands": [
        {
            "name": "update react",
            "command": "gitCommand",
            "fields": [],
            "payload": {
                "path": "/Users/adam/projects/react",
                "branch": "master",
                "pull": true
            }
        },
        {
            "name": "run mock command",
            "command": "anyCommand",
            "payload": {
                "command": "node /Users/adam/projects/smoother/packages/mockEmiter/index.js"
            }
        },
        {
            "name": "this will fail",
            "command": "anyCommand",
            "payload": {
                "command": "node /projects/smoother/packages/mockEmiter/index.js"
            }
        },
        {
            "name": "b -> a",
            "command": "replaceCommand",
            "payload": {
                "path": "node /projects/smoother/packages/mockEmiter/index.js",
                "replacer": "a",
                "replacee": "b"
            }
        },
        {
            "name": "a -> b",
            "command": "replaceCommand",
            "payload": {
                "path": "node /projects/smoother/packages/mockEmiter/index.js",
                "replacer": "a",
                "replacee": "b"
            }
        }

    ]
};

test('validateConfigSuccess', () => {
  expect(validateConfig(successConfig)).toBe(true);
});

test('validateConfig fails', () => {
   expect(() => validateConfig({ })).toThrow(new Error('commands missing'));
})
