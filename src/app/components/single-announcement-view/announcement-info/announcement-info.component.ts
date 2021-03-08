import {Component, Input, OnInit} from '@angular/core';
import {AnnouncementService} from '../../../services/announcement.service';
import {AnnouncementData} from '../../../models/AnnouncementData';

@Component({
  selector: 'app-announcement-info',
  templateUrl: './announcement-info.component.html',
  styleUrls: ['./announcement-info.component.scss']
})
export class AnnouncementInfoComponent implements OnInit {



  constructor(private  announcementService: AnnouncementService) {
  }

  ngOnInit(): void {

  }

}
