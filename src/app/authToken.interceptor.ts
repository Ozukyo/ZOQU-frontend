import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const obj = JSON.parse(JSON.stringify(localStorage.getItem('token')));

    if (obj != null) {
      req = req.clone({
        setHeaders: {Authorization: obj},
      });
    }
    // else {
    //   if (req.url !== 'logowanie') {
    //     this.router.navigate(['logowanie']);
    //     return;
    //   }
    // }
    return next.handle(req);
  }
}
