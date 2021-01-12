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
  selectedCategoryName = '';
  selectedSubcategoryName = '';

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.addingForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(70)]),
      category: new FormControl(''),
      subcategory: new FormControl(''),
      subSubcategory: new FormControl(''),
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

  onSelectedCategory(): void {
    this.selectedCategoryName = this.addingForm.get('category').value;
  }

  onSelectedSubcategory(): void {
    this.selectedSubcategoryName = this.addingForm.get('subcategory').value;
  }

  getCategoryFromCategories(): Category {
    const categoriesCopy = [...this.categories];
    return categoriesCopy.filter(category => {
      return category.name === this.selectedCategoryName;
    })[0];
  }

  getSubcategoryFromSubcategories(): Subcategory {
    // const categoriesCopy = [...this.categories];
    // const chosenCategory = categoriesCopy.filter(category => {
    //   return category.name === this.selectedCategoryName;
    // })[0];
    console.log(this.selectedSubcategoryName);
    const chosenCategory = this.getCategoryFromCategories();
    return chosenCategory.subcategories.filter(subcategory => {
      console.log(subcategory);
      return subcategory.name === this.selectedSubcategoryName;
    })[0];

  }


}
