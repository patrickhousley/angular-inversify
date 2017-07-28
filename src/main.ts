import { createPlatform, createPlatformFactory, enableProdMode, Injector, InjectionToken,
  NgModuleRef, Provider, Type, NgModuleFactory, ReflectiveKey, PlatformRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
