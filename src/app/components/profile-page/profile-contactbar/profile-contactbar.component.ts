import {Component, Input, OnInit} from '@angular/core';
import {UserData} from '../../../models/UserData';

@Component({
  selector: 'app-profile-contactbar',
  templateUrl: './profile-contactbar.component.html',
  styleUrls: ['./profile-contactbar.component.scss']
})
export class ProfileContactbarComponent implements OnInit {
@Input() userContact: UserData;
  constructor() { }

  ngOnInit(): void {
  }

}
