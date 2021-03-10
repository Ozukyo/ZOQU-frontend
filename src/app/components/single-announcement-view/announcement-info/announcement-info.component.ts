import {Component, Input, OnInit} from '@angular/core';
import {AnnouncementService} from '../../../services/announcement.service';
import {AnnouncementData} from '../../../models/AnnouncementData';
import {switchMap, take, tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-announcement-info',
  templateUrl: './announcement-info.component.html',
  styleUrls: ['./announcement-info.component.scss']
})
export class AnnouncementInfoComponent implements OnInit {

announcement: AnnouncementData;
  id: number;

  constructor(private  announcementService: AnnouncementService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.url.pipe(
      tap(myUrl => this.id = +myUrl[0].path),
      switchMap(() => this.announcementService.getAnnouncementById(this.id)),
      take(1)
    ).subscribe(data => {
      this.announcement = data;
      console.log(data);
    });

    // this.activatedRoute.url.pipe(
    //   map(myUrl => {
    //       this.id = +myUrl[0].path;
    //       return this.id;
    //     }
    //   ),
    //   switchMap((id) => this.announcementService.getAnnouncementById(id))
    // ).subscribe(data => {
    //   this.announcement = data;
    //   console.log(data);
    // });

  }

}
