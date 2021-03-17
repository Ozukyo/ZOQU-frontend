import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {UserData} from '../../models/UserData';
import {switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user: UserData;


  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(params => {
        if (params && params.id) {
          return this.userService.getUserById(params.id);
        } else {
          return this.userService.getUserEmail().pipe(
            switchMap(email =>
              this.userService.getUserByEmail(email)));
        }
      })).subscribe(userData => this.user = userData);
  }
}
