import {Component, OnInit} from '@angular/core';
import {AnnouncementService} from '../../services/announcement.service';
import {Observable} from 'rxjs';
import {AnnouncementData} from '../../models/AnnouncementData';
import {tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-announcements-view',
  templateUrl: './announcements-view.component.html',
  styleUrls: ['./announcements-view.component.scss']
})
export class AnnouncementsViewComponent implements OnInit {

  announcementList: Observable<AnnouncementData[]>;

  constructor(private announcementService: AnnouncementService,
              private router: Router,
              private  route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.announcementList = this.announcementService.getAnnouncements();
  }

  onSelect(id: number): void {
    console.log('jestem w metodzie');
    this.router.navigate([`/ogloszenie/${id}`]);
  }

}
