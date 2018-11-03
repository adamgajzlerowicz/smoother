
enum CommandName {
  replaceCommand = 'replaceCommand',
  gitCommand = 'gitCommand',
  anyCommand = 'anyCommand'
}

enum MessageType {
    OUT = 'OUT',
    ERROR = 'ERROR',
    END = 'END'
}

enum StreamResult {
    ERROR = 'error',
    DATA = 'data',
    CLOSE = 'close'
}

interface Message {
  content: string,
  source: CommandName,
  type: MessageType
};

enum Event {
    CONNECT = 'connect',
    DISCONNECT = 'disconnect',
    CLOSE = 'close',
    CONNECTION = 'connection',
    DATA = 'data',
    MESSAGE = 'MESSAGE',
}

enum SocketMessage {
    message = 'MESSAGE',
    config = 'CONFIG',
}

type Command = any;

interface Config {
  commands: Command[]
}

export {
  SocketMessage,
  Event,
  Message,
  CommandName,
  StreamResult,
  MessageType,
  Config,
  Command
}

