import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserData} from '../models/UserData';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {

  }

  addUser(user: UserData): Observable<UserData> {
    return this.http.post<UserData>(`${environment.apiUrl}users`, user);
  }
}
