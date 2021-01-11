import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../../models/Category';
import {CategoryService} from '../../../services/category.service';
import {Subcategory} from '../../../models/Subcategory';

@Component({
  selector: 'app-adding-form',
  templateUrl: './adding-form.component.html',
  styleUrls: ['./adding-form.component.scss']
})
export class AddingFormComponent implements OnInit {
  addingForm: FormGroup;
  titleChars = 70;
  contentChars = 7000;
  categories: Category[];
  // isCategorySelected = false;
  subcategories: Subcategory[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.addingForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(70)]),
      category: new FormControl('ONA'),
      content: new FormControl('', Validators.maxLength(7000)),
      productDetails: new FormGroup({
        color: new FormControl(''),
        material: new FormControl(''),
      }),
      productPictures: new FormGroup({
        picture: new FormControl()
      }),
      price: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    });

    this.getCategories();

    // if (this.addingForm.get('category').value.val) {
    //   this.loadSubcategories(this.addingForm.get('category').value);
    // }
  }

  activateInput(elem: any): void {
    elem.click();
  }

  onSubmit(): void {
    console.log(this.addingForm);
    console.log(this.addingForm.get('title').value.length);
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(data => {
        this.categories = data;
      });
  }

  loadSubcategories(nameOfCategory: string): void {
    this.categoryService.getCategoryByName(nameOfCategory)
      .subscribe(category => {
        this.subcategories = category.subcategories;
        console.log(category);
        console.log(category.subcategories);
      });
  }

}
