import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adding-form',
  templateUrl: './adding-form.component.html',
  styleUrls: ['./adding-form.component.scss']
})
export class AddingFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activateInput(elem: any): void {
    elem.click();
  }
}
