import {Component, OnInit} from '@angular/core';
import {AnnouncementService} from '../../../services/announcement.service';
import {AnnouncementData} from '../../../models/AnnouncementData';
import {switchMap, take, tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {UserData} from '../../../models/UserData';

@Component({
  selector: 'app-announcement-info',
  templateUrl: './announcement-info.component.html',
  styleUrls: ['./announcement-info.component.scss']
})
export class AnnouncementInfoComponent implements OnInit {

  announcement: AnnouncementData;
  id: number;
  user: UserData;

  constructor(private  announcementService: AnnouncementService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router) {
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
    setTimeout(() => {
      this.userService.getUserById(this.announcement.userId).subscribe(data => {
        this.user = data;
        console.log(data);
      });
    }, 500);


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

  onNavigate(): void{
    this.router.navigate([`profil/${this.user.id}`]);
  }
}
