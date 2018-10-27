import { Component, Input, AfterViewInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';

import { GitCommandComponent } from './git-command/git-command.component';
import { AnyCommandComponent } from './any-command/any-command.component';

import { Command } from '../../../../../types';

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
    switch(this.command.command) {
      case "gitCommand":
        this.loadItem(GitCommandComponent);
      break;
      case "anyCommand":
        this.loadItem(AnyCommandComponent);
    }
  }

  private loadItem(component) {
   const factory = this.componentFactoryResolver.resolveComponentFactory(component);
   const componentRef = this.placeholderRef.createComponent(factory);
       // @ts-ignore
       componentRef.instance.command = this.command;
       componentRef.changeDetectorRef.detectChanges();
     }
   }
