
# Runner for automation of your daily tasks


## application for running common tasks like:
- [x] run commands with a single click
- [x] see output of those commands
- [x] fully configured from json file
- [x] easy to extend

## available commands
- [x] git command
- [x] any command

## usage
All you need to do is run the application supplying config as first parameter `npx smoother config.json`.
config will be validated against schema and checked. Navigate to http://localhost:4200 to see the app.

## development
Application is easy to extend. Make your own command and make PR to get it added to the app.
* add backend [command](https://github.com/adamgajzlerowicz/smoother/tree/master/packages/backend/src/commands)
* add socket listener [socket listener](https://github.com/adamgajzlerowicz/smoother/blob/master/packages/backend/src/index.ts)
* add your command to your custom config file
* add command [component](https://github.com/adamgajzlerowicz/smoother/tree/master/packages/frontend/src/app/components/commands) ex (ng g c components/commands/replace-command)

### TODO
* add param support to commands
* add more commands ex: replace file content
* example config
