import { Widget } from './widget';
export class Widget50 extends Widget {
  link: string;
  constructor(widgetData: any) {
    super(widgetData);
    this.link = widgetData.link;
  }
}
