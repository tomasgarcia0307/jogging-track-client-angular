import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import 'hammerjs';
// import '@angular/material/prebuilt-themes/indigo-pink.css'

platformBrowserDynamic().bootstrapModule(AppModule);