import {Component, Input, OnInit} from '@angular/core';
import {AnnouncementData} from '../../models/AnnouncementData';
import {AnnouncementService} from '../../services/announcement.service';
import {ActivatedRoute, Router} from '@angular/router';

import {Observable} from 'rxjs';

@Component({
  selector: 'app-single-announcement-view',
  templateUrl: './single-announcement-view.component.html',
  styleUrls: ['./single-announcement-view.component.scss']
})
export class SingleAnnouncementViewComponent implements OnInit {
  @Input() announ;
  announcement: Observable<AnnouncementData>;
  id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private announcementService: AnnouncementService) {
  }

  ngOnInit(): void {
    // this.announcement = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.announcementService.getAnnouncement(params.get('id')))
    // );
    // this.announcement = this.announcementService.getAnnouncement(this.id);
    // console.log(this.announcement);
    // });
    // }
  }
}
