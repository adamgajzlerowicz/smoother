import { Component, Input, AfterViewInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';

import { GitCommandComponent } from './git-command/git-command.component';
import { AnyCommandComponent } from './any-command/any-command.component';
import { ReplaceCommandComponent } from './replace-command/replace-command.component';

import { Command } from '../../../../../types';

// TODO: refactor to use constants
const cases = {
  gitCommand: GitCommandComponent,
  anyCommand: AnyCommandComponent,
  replaceCommand: ReplaceCommandComponent
};

@Component({
  selector: 'app-commands',
  template: `<div #placeholder></div>`,
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements AfterViewInit {
  @Input() command: Command;

  @ViewChild("placeholder", {read: ViewContainerRef}) placeholderRef: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngAfterViewInit() {
    this.loadItem(cases[this.command.command]);
  }

  private loadItem(component) {
    if (!component) {
      throw new Error("missing command");
    }

    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = this.placeholderRef.createComponent(factory);
    // @ts-ignore
    componentRef.instance.command = this.command;
    componentRef.changeDetectorRef.detectChanges();
  }
}
