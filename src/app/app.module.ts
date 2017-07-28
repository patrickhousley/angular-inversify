import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const $$get = this.injector.get.bind(this.injector);
    this.injector.get = (token: any, notFoundValue?: any) => {
      let ngInjectorError: Error;

      try {
        return $$get(token, notFoundValue);
      } catch (error) {
        ngInjectorError = error;
      }

      try {
        return window.exampleApp.container.get(token);
      } catch (error) {
        throw ngInjectorError;
      }
    };
  }
}
