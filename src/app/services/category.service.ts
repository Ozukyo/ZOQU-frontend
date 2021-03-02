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
  categoriesURL = 'http://localhost:3000/categories';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesURL);
  }

  getCategoriesNew(): Observable<CategoryData> {
    const newCategoryDataList: CategoryData[] = [];
    return this.http.get<ICategoryDataDto>(`${environment.apiUrl}categories`)
      .pipe(map(result => new CategoryData(result[1])
      ));
  }

  getCategory(announcement: Category): Observable<Category> {
    const url = `${this.categoriesURL}/${announcement.id}`;
    return this.http.get<Category>(url);
  }
}
