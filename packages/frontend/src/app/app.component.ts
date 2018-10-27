import { Component, OnInit } from '@angular/core';

import { SocketService } from './socket.service';
import { updateData, updateContent } from './helpers';

import { Message, Event, CommandName, SocketMessage, Config } from '../../../types';
import { SocketDataType } from './types';


type State = Message[];

const defaultSocketState = {};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  connected = false;
  socketData: SocketDataType = { ...defaultSocketState };
  config: Config = {
    commands: []
  };

  constructor(
    private socketService: SocketService,
    ) { }

  ngOnInit(): void {
    this.socketService.onMessage<Config>(SocketMessage.config)
      .subscribe(config => this.config = config );


    this.socketService.onMessage<Message>(SocketMessage.message)
       .subscribe((message: Message) => {
         this.socketData = {
          ...this.socketData,
          [message.source]: updateContent(this.socketData, message)
       };
      });

     this.socketService.onEvent(Event.CONNECT).subscribe(() => this.connected = true);
     this.socketService.onEvent(Event.DISCONNECT).subscribe(() => this.connected = false);
  }



  command({ command, name, payload }: { command: CommandName, name: string, payload?: any }): void {
    this.socketService.send(command, { name, payload });
  }


  gitCommand(): void {
    this.command({
      command: 'gitCommand',
      name: 'git command',
      payload: {
        path: '/Users/adam/projects/react',
        branch: 'master',
        pull: true,
      },
    });
  }

  mockCommand(): void {
    this.command({
      command: 'anyCommand',
      name: 'test command',
      payload: {
        command: 'node /Users/adam/projects/lerna-repo/packages/mockEmiter/index.js',
      },
    });
  }

  clearAll(): void {
    this.socketData = { ...defaultSocketState };
  }
}

