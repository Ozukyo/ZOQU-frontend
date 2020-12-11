import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../models/Category';


@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  announcementsURL = 'http://localhost:3000/categories';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.announcementsURL);
  }

  getCategory(announcement: Category): Observable<Category> {
    const url = `${this.announcementsURL}/${announcement.id}`;
    return this.http.get<Category>(url);
  }
}
