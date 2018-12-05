import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Widget25 } from './widget-25';
import { WidgetComponent } from './widget-component';
@Component({
  template: `
    <div *ngIf="data !== undefined" [class.background-color]="data.color">
      <h1>{{ data.title }}</h1>
      <p>{{ data.description }}</p>
    </div>
  `
})
export class Widget25Component implements WidgetComponent {
  @Input() data: Widget25;
}
