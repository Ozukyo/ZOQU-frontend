import {Component, OnInit} from '@angular/core';
import {Category} from '../../models/Category';
import {Observable} from 'rxjs';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoriesList: Observable<Category[]>;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoriesList = this.categoryService.getCategories();
  }

}
