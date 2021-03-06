import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';

import { SocketService } from './socket.service';
import { updateContent } from './helpers/updateContent';

import { Message, Event, SocketMessage, Config } from '../../../types';
import { SocketDataType } from './types';

const defaultSocketState = {};

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
    @ViewChild('scrolling') private myScrollContainer: ElementRef;

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
            .subscribe(config => this.config = config);

        this.socketService.onMessage<Message>(SocketMessage.message)
            .subscribe((message: Message) => {
                this.socketData = updateContent(this.socketData, message);
                this.scrollToBottom();

            });
        this.socketService.onEvent(Event.CONNECT).subscribe(() => this.connected = true);
        this.socketService.onEvent(Event.DISCONNECT).subscribe(() => this.connected = false);
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch (err) { }
    }

    clearAll(): void {
        this.socketData = { ...defaultSocketState };
    }
}

