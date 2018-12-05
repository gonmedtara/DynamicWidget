export class Widget {
  title: string;
  description: string;
  size: string;
  constructor(widgetData: any) {
    this.title = widgetData.title;
    this.description = widgetData.description;
    this.size = widgetData.size;
  }
}
