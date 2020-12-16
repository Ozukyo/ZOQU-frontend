import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Announcement} from '../models/Announcement';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  announcementsURL = 'http://localhost:3000/announcements';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.announcementsURL);
  }

  getAnnouncement(announcement: Announcement): Observable<Announcement> {
    const url = `${this.announcementsURL}/${announcement.id}`;
    return this.http.get<Announcement>(url);
  }
}
