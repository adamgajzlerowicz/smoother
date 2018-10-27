import { Component, OnInit, Input } from '@angular/core';

import { SocketService } from 'src/app/socket.service';

import { Command } from '../../../../../../types';

@Component({
  selector: 'app-git-command',
  templateUrl: './git-command.component.html',
  styleUrls: ['./git-command.component.scss']
})
export class GitCommandComponent {
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
