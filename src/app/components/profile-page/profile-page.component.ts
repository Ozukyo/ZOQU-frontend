import { Component, OnInit } from '@angular/core';
import {ProfileService} from "./profile.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfileData(1).subscribe(console.log);
  }

}
