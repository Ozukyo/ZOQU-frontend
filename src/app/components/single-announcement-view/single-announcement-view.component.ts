import {Component, Input, OnInit} from '@angular/core';
import {AnnouncementData} from '../../models/AnnouncementData';
import {AnnouncementService} from '../../services/announcement.service';
import {ActivatedRoute, Router} from '@angular/router';

import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-single-announcement-view',
  templateUrl: './single-announcement-view.component.html',
  styleUrls: ['./single-announcement-view.component.scss']
})
export class SingleAnnouncementViewComponent implements OnInit {

  id: number;
  announcement: AnnouncementData;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private announcementService: AnnouncementService) {
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(myUrl => this.id = +myUrl[0].path);
    console.log(this.id);
    this.announcementService.getAnnouncementById(this.id)
      .pipe(tap(console.log))
      .subscribe(data => this.announcement = data);
  }
}
