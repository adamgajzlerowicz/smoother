import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import * as socketIo from 'socket.io-client';

import { environment } from '../environments/environment';
import { Message, Event, CommandName, SocketMessage, Config } from '../../../types';

const SERVER_URL = environment.ws_url;

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  public initSocket(): void {
      this.socket = socketIo(SERVER_URL);
  }

  public send(message: CommandName, payload?: any): void {
      this.socket.emit(message, payload);
  }

  public onMessage<T>(message: SocketMessage): Observable<T> {
      return new Observable<T>(observer => {
          this.socket.on(message, (data) => observer.next(data));
      });
  }

  public onEvent(event: Event): Observable<any> {
      return new Observable<Event>(observer => {
          this.socket.on(event, () => observer.next());
      });
  }
  constructor() {
    this.initSocket();
  }
}
