import { Component, Input } from '@angular/core';

import { SocketService } from 'src/app/socket.service';

import { Command } from '../../../../../../types';

@Component({
  selector: 'app-replace-command',
  templateUrl: './replace-command.component.html',
  styleUrls: ['./replace-command.component.scss']
})
export class ReplaceCommandComponent {
  @Input() command: Command;

  constructor( private socketService: SocketService ) { }

  dispatchCommand(): void {
    this.socketService.send(
      this.command.command,
      {
        name: this.command.name,
        payload: this.command.payload
      },
    );
  }
}

