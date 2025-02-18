import { ApplicationConfig, provideAppInitializer, provideEnvironmentInitializer, providePlatformInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    providePlatformInitializer(() => {
      console.log('Platform initialized');
    }),
    provideAppInitializer(() => {
      console.log('App initialized');
    }),
    provideEnvironmentInitializer(() => {
      console.log('Environment initialized');
    })
  ]
};
