import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../models/Category';
import {CategoryData} from '../models/CategoryData';
import {ICategoryDataDto} from '../models/interfaces/ICategoryDataDto';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // categoriesURL = 'http://localhost:3000/categories';
  // httpOptions = {
  //   headers: new HttpHeaders({'Content-Type': 'application/json'})
  // };
  // categoryList: CategoryData[];

  constructor(private http: HttpClient) {
  }

  // getCategories(): Observable<Category[]> {
  //   return this.http.get<Category[]>(this.categoriesURL);
  // }

  getMainCategories(): Observable<CategoryData[]> {
    // const newCategoryDataList: CategoryData[] = [];
    return this.http.get<ICategoryDataDto[]>(`${environment.apiUrl}categories`)
      .pipe(map(categories => {

        const level1Dto = [];
        const level2Dto = [];
        const level3Model = [];
        categories.forEach(dataItem => {
          switch (dataItem.category_level) {
            case 1:
              level1Dto.push(dataItem);
              break;
            case 2:
              level2Dto.push(dataItem);
              break;
            case 3:
              level3Model.push(new CategoryData(dataItem));
              break;
          }
        });
        const level2Model = this.convertCategoryDtoToModel(level2Dto, level3Model);
        return this.convertCategoryDtoToModel(level1Dto, level2Model);
      }));
  }
  private convertCategoryDtoToModel(categoryDto: ICategoryDataDto[], subcategories: CategoryData[]): CategoryData[]{
     return categoryDto.map(item => {
      const model = new CategoryData(item);
      model.subcategories = subcategories.filter(i => i.parentId === model.id);
      return model;
    });
  }
  //
  // getCategory(announcement: Category): Observable<Category> {
  //   const url = `${this.categoriesURL}/${announcement.id}`;
  //   return this.http.get<Category>(url);
  // }
}
