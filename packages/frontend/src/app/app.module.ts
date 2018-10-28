import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandPipe } from './helpers/commandPipe';
import { HasContentPipe } from './helpers/hasContentPipe';
import { CommandsComponent } from './components/commands/commands.component';
import { GitCommandComponent } from './components/commands/git-command/git-command.component';
import { AnyCommandComponent } from './components/commands/any-command/any-command.component';


@NgModule({
  declarations: [
    CommandPipe,
    HasContentPipe,
    AppComponent,
    CommandsComponent,
    GitCommandComponent,
    AnyCommandComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [GitCommandComponent, AnyCommandComponent]
})
export class AppModule { }
