import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { ALL_ICONS } from '../shared/icon-provider';
import { NZ_ICONS } from 'ng-zorro-antd/icon';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(), 
    { provide: NZ_ICONS, useValue: ALL_ICONS }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
