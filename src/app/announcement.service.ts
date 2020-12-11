import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {


    announcementsURL = 'http://localhost:3000/tasks';

    constructor(private http: HttpClient) {
    }

    getAnnouncements(): Observable<Announcement> {
      return this.http.get<Announcement[]>(this.announcementsURL);
    }
}
