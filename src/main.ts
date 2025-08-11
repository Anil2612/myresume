import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import posthog from 'posthog-js';

if (environment.production) {
  enableProdMode();
}

posthog.init('phc_OvNcK1qrGTlyQ40AoaiXCYLie4brBHirfWLUbtrKZpw', {
  api_host: 'https://us.i.posthog.com',
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
