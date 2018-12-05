export class Widget {
  title: string;
  description: string;
  constructor(widgetData: any) {
    this.title = widgetData.title;
    this.description = widgetData.description;
  }
}
