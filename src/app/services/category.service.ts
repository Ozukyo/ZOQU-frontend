import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryData} from '../models/CategoryData';
import {ICategoryDataDto} from '../models/interfaces/ICategoryDataDto';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getAllCategoriesGroupedByLevel(): Observable<CategoryData[]> {
    return this.http.get<ICategoryDataDto[]>(`${environment.apiUrl}categories`)
      .pipe(map(categories => {

        const firstLvlCategoriesDto = [];
        const secondLvlCategoriesDto = [];
        const thirdLvlCategoriesDto = [];
        categories.forEach(category => {
          switch (category.category_level) {
            case 1:
              firstLvlCategoriesDto.push(category);
              break;
            case 2:
              secondLvlCategoriesDto.push(category);
              break;
            case 3:
              thirdLvlCategoriesDto.push(new CategoryData(category));
              break;
          }
        });
        const level2Model = this.convertCategoryDtoToModel(secondLvlCategoriesDto, thirdLvlCategoriesDto);
        return this.convertCategoryDtoToModel(firstLvlCategoriesDto, level2Model);
      }));
  }

  private convertCategoryDtoToModel(categoryDto: ICategoryDataDto[], subcategories: CategoryData[]): CategoryData[] {
    return categoryDto.map(item => {
      const model = new CategoryData(item);
      model.subcategories = subcategories.filter(subcategory => subcategory.parentId === model.id);
      return model;
    });
  }
}

