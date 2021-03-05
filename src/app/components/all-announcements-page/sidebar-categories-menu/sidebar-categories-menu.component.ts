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

}
