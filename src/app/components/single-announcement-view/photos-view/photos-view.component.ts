import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-photos-view',
  templateUrl: './photos-view.component.html',
  styleUrls: ['./photos-view.component.scss']
})
export class PhotosViewComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
    const thumbnails = document.getElementsByClassName('thumbnail') as unknown as HTMLImageElement[];
    const activeImage = document.getElementsByClassName('active');
    for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].addEventListener('mouseover', () => {
        if (activeImage.length > 0) {
          activeImage[0].classList.remove('active');
        }
        thumbnails[i].classList.add('active');
        (document.getElementById('chosen-slide') as HTMLImageElement).src = thumbnails[i].src;
      });
    }
  }

}
