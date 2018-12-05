import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-widget-container
      *ngFor="let widget of widgetRows"
      [widgetData]="widget"
    ></app-widget-container>
  `
})
export class AppComponent {
  widgetRows = [
    {
      title: 'feel',
      description: 'widget 25',
      color: '#e62b2b',
      size: '25'
    },
    {
      title: 'sensibiler',
      description: 'widget 50',
      link: 'https://webmail.sifast.tn/#1',
      size: '50'
    },
    {
      title: 'catalogue',
      description: 'widget 50',
      link: 'https://angular.io/guide,/dynamic-component-loader',
      size: '50'
    },
    {
      title: 'webbinaire',
      description: 'widget 25',
      color: '#91aeff',
      size: '25'
    }
  ];
}
