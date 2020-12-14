import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  showSubcategory = false;

  constructor() {
  }

  ngOnInit(): void {

  }


  onShowSubcategory(event: any): void {
    if (!this.showSubcategory) {
      event.target.nextSibling.className += ' show';
      this.showSubcategory = true;
    } else {
      const index = event.target.nextSibling.className.lastIndexOf(' ');
      event.target.nextSibling.className = event.target.nextSibling.className.substring(0, index);
      this.showSubcategory = false;

    }
  }


}
