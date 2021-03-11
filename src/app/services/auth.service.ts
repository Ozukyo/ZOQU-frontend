import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient,
              private router: Router) {
  }

  login(data): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}login`, data).pipe(
      tap((result) => this.saveTokenToLocalstorage(result)),
      // catchError(async err => await console.log(err.message))
    );
  }

  // private handleError<T>(operation = 'operation', result?: T): Observable<any> {
  //   return (error: any): Observable<T> => {
  //     return of(result as T);
  //   };
  // }
  logout(): void {
    localStorage.removeItem('token');
  }

  private saveTokenToLocalstorage(data): void {
    if (data) {
      console.log(data);
      localStorage.setItem('token', data);
    }
  }

  isLoggedIn(): boolean {
   return (localStorage.getItem('token') !== null);
  }
}
