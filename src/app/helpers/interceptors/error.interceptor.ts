import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';

import { AuthServiceService } from 'src/app/services/auth-service.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private _authService: AuthServiceService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if ([401, 403].indexOf(err.status) !== -1){
        this._authService.logOut();
        location.reload();
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
