import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AllowedComponents } from './AllowedComponents'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AllowedComponents)
  .catch(err => console.error(err));
