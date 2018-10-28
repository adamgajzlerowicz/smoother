import { Component, Input } from '@angular/core';
import { Command } from '../../../../../../types';
import { SocketService } from 'src/app/socket.service';

@Component({
  selector: 'app-any-command',
  templateUrl: './any-command.component.html',
  styleUrls: ['./any-command.component.scss']
})
export class AnyCommandComponent {
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
