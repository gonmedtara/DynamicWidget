import { Widget } from './widget';
export class Widget25 extends Widget {
  color: string;
  constructor(widgetData: any) {
    super(widgetData);
    this.color = widgetData.color;
  }
}
