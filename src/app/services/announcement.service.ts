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
  announcementList: AnnouncementData[] = [];

  constructor(private http: HttpClient) {
  }

  getAnnouncements(): Observable<AnnouncementData[]> {
    return this.http.get<IAnnouncementDataDto[]>(`${environment.apiUrl}announcements`)
      .pipe(map(data => {
        data.forEach(item => {
          this.announcementList.push(new AnnouncementData(item));
        });
        return this.announcementList;
      }));
  }

  getAnnouncement(id: number): AnnouncementData {
    return this.announcementList.find(announcement => announcement.announcementId === id);
  }

  // getAnnouncement(announcement: AnnouncementData): Observable<AnnouncementData> {
  //   const url = `${this.announcementsURL}/${announcement.id}`;
  //   return this.http.get<AnnouncementData>(url);
  // }
}
