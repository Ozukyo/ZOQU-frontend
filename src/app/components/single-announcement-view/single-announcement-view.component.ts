import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-announcment-view',
  templateUrl: './single-announcement-view.component.html',
  styleUrls: ['./single-announcement-view.component.scss']
})
export class SingleAnnouncementViewComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(myUrl => console.log(myUrl));
  }

}
