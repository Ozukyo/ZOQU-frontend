import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AnnouncementData} from '../models/AnnouncementData';
import {IAnnouncementDataDto} from '../models/interfaces/IAnnouncementDataDto';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getAnnouncements(): Observable<AnnouncementData[]> {
    return this.http.get<IAnnouncementDataDto[]>(`${environment.apiUrl}announcements`)
      .pipe(map(data => {
        const announcementList = [];
        data.forEach(item => {
          announcementList.push(new AnnouncementData(item));
        });
        return announcementList;
      }));

  }

  // getAnnouncement(announcement: AnnouncementData): Observable<AnnouncementData> {
  //   const url = `${this.announcementsURL}/${announcement.id}`;
  //   return this.http.get<AnnouncementData>(url);
  // }
}
