import {Component, Input, OnInit} from '@angular/core';
import {UserData} from '../../../models/UserData';

@Component({
  selector: 'app-profile-page-header',
  templateUrl: './profile-page-header.component.html',
  styleUrls: ['./profile-page-header.component.scss']
})
export class ProfilePageHeaderComponent implements OnInit {
@Input() userName: UserData;
  constructor() { }

  ngOnInit(): void {
  }

}
