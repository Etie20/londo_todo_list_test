import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withInterceptors,
  withInterceptorsFromDi
} from "@angular/common/http";
import {AuthInterceptor} from "./core/helpers/auth.interceptor";
import {provideCacheableAnimationLoader, provideLottieOptions} from "ngx-lottie";
import player from 'lottie-web';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {MessageService} from "primeng/api";

export const appConfig: ApplicationConfig = {
  providers: [
    provideLottieOptions({ player: () => player }),
    provideCacheableAnimationLoader(),
    provideAnimationsAsync(),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    [MessageService]
  ]
};
