import {Component, OnInit} from '@angular/core';
import {Category} from '../../models/Category';
import {Observable, pipe} from 'rxjs';
import {CategoryService} from '../../services/category.service';
import {map} from 'rxjs/operators';
import {CategoryData} from '../../models/CategoryData';
import {ICategoryDataDto} from '../../models/interfaces/ICategoryDataDto';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoriesList: Observable<Category[]>;
  letters: any = {};
  isPolish = false;
  mainCategory = '';
  mainCategoriesList: Observable<ICategoryDataDto[]>;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
      this.mainCategoriesList = this.categoryService.getMainCategories();


    //   this.categoriesList = this.categoryService.getCategories();
    //   this.letters = {
    //     261: 'a',
    //     263: 'c',
    //     281: 'e',
    //     322: 'l',
    //     324: 'n',
    //     243: 'o',
    //     347: 's',
    //     378: 'z',
    //     380: 'z'
    //   };
    //
    // }
    //
    // public convertLettersToEnglish(word: any): string {
    //   this.toggleIfPolishLetter(word);
    //
    //   if (word.includes(', ')) {
    //     word = word.split(', ').join('-');
    //   } else if (word.includes(' ')) {
    //     word = word.split(' ').join('-');
    //   }
    //
    //   if (!this.isPolish) {
    //     return word;
    //   }
    //
    //   for (let i = 0; i < word.length; i++) {
    //     for (const [key, value] of Object.entries(this.letters)) {
    //       if (word[i] === String.fromCharCode(parseInt(key, 10))) {
    //         word = word.replace(word[i], value);
    //       }
    //     }
    //   }
    //   return word;
    //
    // }
    //
    // public toggleIfPolishLetter(word: any): void {
    //   this.isPolish = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'].some(letter => word.includes(letter));
    // }

  }
}
