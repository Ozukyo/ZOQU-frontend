import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-adding-form',
  templateUrl: './adding-form.component.html',
  styleUrls: ['./adding-form.component.scss']
})
export class AddingFormComponent implements OnInit {
  addingForm: FormGroup;

  constructor() {
    this.addingForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(70)]),
      category: new FormControl(''),
      content: new FormControl(''),
      productDetails: new FormGroup({
        color: new FormControl(''),
        material: new FormControl(''),
      }),
      productPictures: new FormGroup({
        picture: new FormControl()
      }),
      price: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  activateInput(elem: any): void {
    elem.click();
  }

  onSubmit(): void {
    console.log(this.addingForm);
  }
}
