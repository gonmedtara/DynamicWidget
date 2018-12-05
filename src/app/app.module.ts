import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WidgetContainerComponent } from './widget-container.component';
import { WidgetDirective } from './widget.directive';
import { Widget25Component } from './widget-25.component';
import { Widget50Component } from './widget-50.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    WidgetContainerComponent,
    Widget25Component,
    Widget50Component,
    WidgetDirective
  ],
  entryComponents: [Widget25Component, Widget50Component],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
