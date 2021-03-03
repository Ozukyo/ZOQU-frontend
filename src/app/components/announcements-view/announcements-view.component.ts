import {Component, OnInit} from '@angular/core';
import {AnnouncementService} from '../../services/announcement.service';
import {Observable} from 'rxjs';
import {AnnouncementData} from '../../models/AnnouncementData';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-announcments-view',
  templateUrl: './announcements-view.component.html',
  styleUrls: ['./announcements-view.component.scss']
})
export class AnnouncementsViewComponent implements OnInit {

  announcementList: Observable<AnnouncementData[]>;

  constructor(private announcementService: AnnouncementService) {
  }

  ngOnInit(): void {
    this.announcementList = this.announcementService.getAnnouncements().pipe(tap(console.log));

  }
}
