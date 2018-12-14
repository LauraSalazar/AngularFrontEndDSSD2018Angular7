import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MyInterceptor } from './Interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
];
