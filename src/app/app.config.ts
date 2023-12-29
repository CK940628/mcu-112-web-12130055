import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { TaskService } from './services/task.service';
import { TaskRemoteService } from './services/task-remote.service';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    { provide: TaskService, useClass: TaskRemoteService },
  ],
};
