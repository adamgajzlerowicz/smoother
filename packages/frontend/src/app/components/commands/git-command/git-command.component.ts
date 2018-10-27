import { Component, OnInit, Input } from '@angular/core';

import { Command } from '../../../../../../types';

@Component({
  selector: 'app-git-command',
  templateUrl: './git-command.component.html',
  styleUrls: ['./git-command.component.scss']
})
export class GitCommandComponent implements OnInit {
  @Input() command: Command;

  constructor() { }

  ngOnInit() {
  }

}
