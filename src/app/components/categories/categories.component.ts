import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CategoryService} from '../../services/category.service';
import {tap} from 'rxjs/operators';

import {CategoryData} from '../../models/CategoryData';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  mainCategoriesList: Observable<CategoryData[]>;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.mainCategoriesList = this.categoryService.getAllCategoriesGroupedByLevel().pipe(tap(console.log));
  }
}
