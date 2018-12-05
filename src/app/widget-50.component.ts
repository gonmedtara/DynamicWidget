import { Component, Input } from '@angular/core';
import { Widget50 } from './widget-50';
import { WidgetComponent } from './widget-component';

@Component({
  template: `
    <div>
      <h1>{{ data.title }}</h1>
      <p>{{ data.description }}</p>
      <a href="{{ data.link }}" target="_blank"></a>
    </div>
  `
})
export class Widget50Component implements WidgetComponent {
  @Input() data: Widget50;
}
