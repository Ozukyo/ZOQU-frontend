import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserData} from '../models/UserData';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) {
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

  private saveTokenToLocalstorage(data): void {
    if (data) {
      console.log(data);
      localStorage.setItem('token', data);
    }
  }
}
