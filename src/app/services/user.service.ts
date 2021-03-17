import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserData} from '../models/UserData';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {IUserDataDto} from '../models/interfaces/IUserDataDto';
import {map} from 'rxjs/operators';
import {RegisterUserData} from '../models/RegisterUserData';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userEmail = '';

  constructor(private http: HttpClient) {
    this.userEmail = localStorage.getItem('email');
  }

  addUser(user: RegisterUserData): Observable<RegisterUserData> {
    return this.http.post<RegisterUserData>(`${environment.apiUrl}users`, user);
  }

  getUserById(userId: number): Observable<UserData> {
    console.log(userId);
    return this.http.get<IUserDataDto>(`${environment.apiUrl}users/${userId}`).pipe(map(data => {
        console.log(data);
        return new UserData(data);
      }
    ));
  }

  getUserByEmail(userEmail: string): Observable<UserData> {
    return this.http.get<IUserDataDto>(`${environment.apiUrl}users/email/${userEmail}`).pipe(map(data => {
        // console.log(data);
        return new UserData(data);
      }
    ));
  }

  saveEmailToLocalStorage(): void {
    localStorage.setItem('email', this.userEmail);
  }

  updateUserEmail(email: string): void {
    this.userEmail = email;
  }

  getUserEmail(): Observable<string> {
    console.log(this.userEmail);
    return of(this.userEmail);
  }

}
