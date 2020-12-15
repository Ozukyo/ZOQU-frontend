import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  onShowSubcategory(event: any): void {
    const className = event.target.nextSibling.className;
    if (!className.includes('show')) {
      event.target.nextSibling.className += ' show';

    } else {
      event.target.nextSibling.className = event.target.nextSibling.className.replace(' show', '');
    }

  }

}