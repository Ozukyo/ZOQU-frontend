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
  letters: any = {};
  category: any = '';

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    const categoryName = this.category.name;
    this.categoriesList = this.categoryService.getCategories();
    this.letters = {
      261: 'a',
      263: 'c',
      281: 'e',
      322: 'l',
      324: 'n',
      243: 'o',
      347: 's',
      378: 'z',
      380: 'z'
    };
    Object.keys(this.letters).map((key, index) => {
      console.log(this.letters[key]);
    });
    console.log(categoryName);
  }

//   transformLetters()
}
