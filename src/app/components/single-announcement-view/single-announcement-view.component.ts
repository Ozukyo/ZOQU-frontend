import {Component, Input, OnInit} from '@angular/core';
import {AnnouncementData} from '../../models/AnnouncementData';
import {AnnouncementService} from '../../services/announcement.service';
import {ActivatedRoute, Router} from '@angular/router';

import {Observable, Subscription} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {log} from 'util';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-single-announcement-view',
  templateUrl: './single-announcement-view.component.html',
  styleUrls: ['./single-announcement-view.component.scss']
})
export class SingleAnnouncementViewComponent implements OnInit {

  id: number;
  public announcement: AnnouncementData;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private announcementService: AnnouncementService) {
    // this.activatedRoute.data
    //      .pipe(
    //        take(1))
    //      .subscribe(response => console.log(response));
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(myUrl => console.log);
    console.log(this.id);
    this.announcementService.getAnnouncementById(this.id).subscribe(announcement => console.log);
  }
}
