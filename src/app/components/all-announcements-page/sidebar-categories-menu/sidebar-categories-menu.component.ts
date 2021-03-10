import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {CategoryData} from '../../../models/CategoryData';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sidebar-categories-menu',
  templateUrl: './sidebar-categories-menu.component.html',
  styleUrls: ['./sidebar-categories-menu.component.scss']
})
export class SidebarCategoriesMenuComponent implements OnInit {
  categoriesList: Observable<CategoryData[]>;

  constructor(private categoriesService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoriesList = this.categoriesService.getAllCategoriesGroupedByLevel();
  }


  onShowSubcategory(event: any): void {
    console.log(event.target.nextSibling);

    if (!event.target.className.includes('active')) {
      event.target.className += ' active';

    } else {
      event.target.className = event.target.className.replace('active', '');
    }

    const className = event.target.nextSibling.className;
    console.log(className);
    if (!className.includes('show')) {
      event.target.nextSibling.className += ' show';

    } else {
      event.target.nextSibling.className = event.target.nextSibling.className.replace(' show', '');
    }

  }
}
