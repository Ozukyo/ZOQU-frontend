import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {UserData} from '../../models/UserData';
import {switchMap, take, tap} from 'rxjs/operators';
import {log} from 'util';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user: UserData;
  email: string;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUser();
    console.log(this.user);
  }

  private getUser(): void {
    this.userService.getUserEmail().subscribe(data => this.email = data);
    console.log(this.email);
    this.userService.getUserByEmail(this.email).subscribe(data => this.user = data);
  }
}
