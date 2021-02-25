import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

// barrel file tsconfig

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  public getProfileData(userId: number): Observable<UserDataModel> {

    return this.http.get<IUserDataDto>(`${environment.apiUrl}users/${userId}`).pipe(map(result => new UserDataModel(result)));
  }
}

export class UserDataModel {
  public userId: number;
  public userEmail: string;
  public userPassword: string;
  public emailAlias: string;
  public emailDomain: string;

  constructor(input: IUserDataDto) {
    this.userId = input.user_id;
    this.userEmail = input.user_email;
    this.userPassword = input.user_password;
    this.parseEmailAddress(input.user_email);
  }

  private parseEmailAddress(emailAddress: string = ''): void {
    [this.emailAlias, this.emailDomain] = emailAddress.split('@');
  }
}

export interface IUserDataDto {
  user_id: number;
  user_email: string;
  user_password: string;
}

// i - interface

//dto - interfejs do danych data to object

