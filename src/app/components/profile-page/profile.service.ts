import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserDataModel} from '../../models/UserData';
import {IUserDataDto} from '../../models/interfaces/IUserDataDto';

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

// dto - interfejs do danych data to object


