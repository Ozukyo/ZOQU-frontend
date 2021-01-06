import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  profileURL = 'http://localhost:3000/profiles';
  private currentUser: number;

  constructor(private http: HttpClient) {
  }

  getProfile(user: User): Observable<User> {
    const url = `${this.profileURL}/${user.id}`;
    return this.http.get<User>(url);
  }

}
