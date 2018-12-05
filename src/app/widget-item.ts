import { Type } from '@angular/core';
import { Widget } from './widget';

export class WidgetItem {
  constructor(public component: Type<any>, public widget: Widget) {}
}
