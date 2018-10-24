import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { SocketDataType } from '../types';

@Pipe({
  name: 'hasContent',
 })
export class HasContentPipe implements PipeTransform {
  transform(socketData: SocketDataType): boolean {
    return Object.keys(socketData).some(key => !!socketData[key].length);
  }
}
