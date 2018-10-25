import { Component, Input } from '@angular/core';

import { Config } from '../../../../../types';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent {
  @Input() config: Config;
  constructor() { }
}
