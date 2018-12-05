import { Component, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { WidgetDirective } from './widget.directive';
import { WidgetService } from './widget.service';
import { WidgetItem } from './widget-item';

@Component({
  selector: 'app-widget-container',
  template: `
    <h3>Widgets</h3>
    <ng-container appWidgetContainer></ng-container>
  `
})
export class WidgetContainerComponent implements AfterViewInit, OnDestroy {
  @ViewChild(WidgetDirective)
  private WidgetDirective: WidgetDirective;

  widgetItems: WidgetItem[];
  intervalId: any;
  widgetIndex: any = -2;

  constructor(private widgetService: WidgetService) {}

  ngAfterViewInit() {
    this.widgetItems = this.widgetService.getAllWidgets();
    this.startPostHighlights();
  }

  startPostHighlights() {
    this.intervalId = setInterval(() => {
      this.widgetIndex =
        this.widgetIndex === this.widgetItems.length ? 0 : this.widgetIndex + 1;
      this.widgetService.loadComponent(
        this.WidgetDirective.viewContainerRef,
        this.widgetItems[this.widgetIndex]
      );
    }, 2000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
