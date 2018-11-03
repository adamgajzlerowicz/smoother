import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { SocketDataType } from '../types';
import { MessageType } from '../../../../types';

interface RecordType {
    source: string;
    lines: string[];
    status: MessageType;
}

type ViewDataType = RecordType[];

const defaultRecord: RecordType = {
  source: '',
  lines: [],
  status: MessageType.OUT
};

@Pipe({ name: 'commandResultsPipe' })
export class CommandPipe implements PipeTransform {
  transform(socketData: SocketDataType): ViewDataType {
    let output = [];
    for (const command of Object.keys(socketData)) {
      const formatted = socketData[command].reduce((aggr, item) => {
          return Object.assign({}, item, {
            source: item.source,
            lines: [...aggr.lines, item.content],
            status: item.type
          });
      }, defaultRecord);
      output = [...output, formatted];
    }
    return output;
  }
}
