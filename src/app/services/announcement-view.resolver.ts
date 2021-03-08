import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, ActivatedRoute
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AnnouncementService} from './announcement.service';
import {AnnouncementData} from '../models/AnnouncementData';

@Injectable({
  providedIn: 'root'
})

export class AnnouncementViewResolver implements Resolve<AnnouncementData> {
  announcement: AnnouncementData;
  id: number;
  announcementService: AnnouncementService;
  list: AnnouncementData[];

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AnnouncementData> {
    console.log(route.params);
    this.id = route.params.id;
    this.announcementService.getAnnouncements().subscribe(data => this.list = data);
    this.announcement = this.announcementService.getAnnouncement(this.id, this.list);
    return of(this.announcement);
  }
}
