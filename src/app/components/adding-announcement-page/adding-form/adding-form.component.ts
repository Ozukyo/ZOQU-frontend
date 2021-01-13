import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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

  constructor(private categoryService: CategoryService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
    this.getCategories();

  }

  activateInput(elem: any): void {
    elem.click();
  }

  createForm(): void {
    this.addingForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(70)]],
      category: [''],
      subcategory: [''],
      subSubcategory: [''],
      content: ['', Validators.maxLength(7000)],
      productDetails: this.fb.group({
        color: [''],
        material: ['']
      }),
      productPictures: this.fb.group({
        picture: ['']
      }),
      price: ['', [Validators.required, Validators.maxLength(5)]]
    });
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
    console.log('biore subcategorie z subcategorii');
    const chosenCategory = this.getCategoryFromCategories();
    return chosenCategory.subcategories.filter(subcategory => {
      return subcategory.name === this.selectedSubcategoryName;
    })[0];

  }


}
