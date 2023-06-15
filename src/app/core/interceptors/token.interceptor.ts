import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private userService : UserService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.userService.user$.value) {
      const clone 
        = request.clone({ 
          setHeaders: { Authorization: 'Bearer ' + this.userService.user$.value.token } 
        })
      return next.handle(clone);
    }
    
    return next.handle(request);
  }
}
