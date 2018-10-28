import { Component, OnInit } from '@angular/core';

import { SocketService } from './socket.service';
import { updateContent } from './helpers';

import { Message, Event, SocketMessage, Config } from '../../../types';
import { SocketDataType } from './types';

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

  clearAll(): void {
    this.socketData = { ...defaultSocketState };
  }
}

