import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWidgetContainer]'
})
export class WidgetDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
