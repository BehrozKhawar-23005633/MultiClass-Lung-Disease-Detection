import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http'; // Provides HttpClient
import { provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { UploadComponent } from './components/upload/upload.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),  // Provides HttpClient service
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(withEventReplay()),
  ],
  // No need to mention standaloneComponents here
};
