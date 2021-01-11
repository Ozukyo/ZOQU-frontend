import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../models/Category';
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

  getCategory(announcement: Category): Observable<Category> {
    const url = `${this.categoriesURL}/${announcement.id}`;
    return this.http.get<Category>(url);
  }

  getCategoryByName(name: string): Observable<Category> {
    return this.http.get<Category[]>(this.categoriesURL)
      .pipe(map(categoryList => {
        for (const category of categoryList) {
          if (category.name === name) {
            return category;
          }
        }
      }));
  }
}
