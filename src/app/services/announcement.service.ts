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
  announcementList: AnnouncementData[];

  constructor(private http: HttpClient) {
  }

  getAnnouncements(): Observable<AnnouncementData[]> {
    this.announcementList = [];
    return this.http.get<IAnnouncementDataDto[]>(`${environment.apiUrl}announcements`)
      .pipe(map(data => {
        data.forEach(item => {
          this.announcementList.push(new AnnouncementData(item));
        });
        return this.announcementList;
      }));
  }

  getAnnouncement(id: number, announcementList: AnnouncementData[]): AnnouncementData {
    // this.getAnnouncements().subscribe(data => this.announcementList = data);
    return announcementList.find(announcement => announcement.announcementId === id);
  }

  getAnnouncementById(id: number): Observable<AnnouncementData> {
    const url = `${environment.apiUrl}/announcements/${id}`;
    return this.http.get<AnnouncementData>(url);
  }
}
