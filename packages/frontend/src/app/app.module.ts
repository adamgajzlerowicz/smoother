import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommandPipe } from './helpers/commandPipe';
import { HasContentPipe } from './helpers/hasContentPipe';
import { CommandsComponent } from './components/commands/commands.component';


@NgModule({
  declarations: [
    CommandPipe,
    HasContentPipe,
    AppComponent,
    CommandsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
