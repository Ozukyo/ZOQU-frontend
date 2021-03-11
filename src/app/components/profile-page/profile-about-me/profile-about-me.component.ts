import {Component, Input, OnInit} from '@angular/core';
import {UserData} from '../../../models/UserData';

@Component({
  selector: 'app-profile-about-me',
  templateUrl: './profile-about-me.component.html',
  styleUrls: ['./profile-about-me.component.scss']
})
export class ProfileAboutMeComponent implements OnInit {
@Input() userAbout: UserData;
  constructor() { }

  ngOnInit(): void {
  }

}
