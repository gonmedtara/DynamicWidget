import {
  Injectable,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';

import { Widget25Component } from './widget-25.component';
import { Widget50Component } from './widget-50.component';
import { WidgetItem } from './widget-item';
import { Widget } from './widget';
import { Widget25 } from './widget-25';
import { Widget50 } from './widget-50';
import { WidgetComponent } from './widget-component';

@Injectable()
export class WidgetService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  loadComponent(viewContainerRef: ViewContainerRef, widgetItem: WidgetItem) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      widgetItem.component
    );
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const widget: WidgetComponent = <WidgetComponent>componentRef.instance;
    widget.data = widgetItem.widget;
  }
  getAllWidgets() {
    return [
      new WidgetItem(
        Widget25Component,
        new Widget25({
          title: 'feel',
          description: 'widget 25',
          color: '#FF50ZE'
        })
      ),

      new WidgetItem(
        Widget50Component,
        new Widget50({
          title: 'sensibiler',
          description: 'widget 50',
          link: 'https://webmail.sifast.tn/#1'
        })
      ),

      new WidgetItem(
        Widget50Component,
        new Widget50({
          title: 'catalogue',
          description: 'widget 50',
          link: 'https://angular.io/guide/dynamic-component-loader'
        })
      ),

      new WidgetItem(
        Widget25Component,
        new Widget25({
          title: 'webbinaire',
          description: 'widget 25',
          color: '#FAA50ZE'
        })
      )
    ];
  }
}
