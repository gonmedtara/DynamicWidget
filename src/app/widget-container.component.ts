import {
  Component,
  ViewChild,
  AfterViewInit,
  ComponentFactoryResolver,
  Input
} from '@angular/core';
import { WidgetDirective } from './widget.directive';
import { WidgetItem } from './widget-item';
import { Widget } from './widget';
import { WidgetComponent } from './widget-component';
import { WidgetComponents, WidgetModels } from './widgets-store';
@Component({
  selector: 'app-widget-container',
  template: `
    <ng-container appWidgetContainer></ng-container>
  `
})
export class WidgetContainerComponent implements AfterViewInit {
  @ViewChild(WidgetDirective)
  private WidgetDirective: WidgetDirective;
  @Input() widgetData: Widget;
  widgetItem: WidgetItem;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    this.widgetItem = new WidgetItem(
      WidgetComponents[`Widget${this.widgetData.size}Component`],
      new WidgetModels[`Widget${this.widgetData.size}`](this.widgetData)
    );
    this.showWidget();
  }

  showWidget() {
    setTimeout(() => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        this.widgetItem.component
      );
      this.WidgetDirective.viewContainerRef.clear();
      const componentRef = this.WidgetDirective.viewContainerRef.createComponent(
        componentFactory
      );
      const widget: WidgetComponent = <WidgetComponent>componentRef.instance;
      widget.data = this.widgetItem.widget;
    }, 1);
  }
}
