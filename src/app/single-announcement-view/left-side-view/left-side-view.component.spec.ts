import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideViewComponent } from './left-side-view.component';

describe('LeftSideViewComponent', () => {
  let component: LeftSideViewComponent;
  let fixture: ComponentFixture<LeftSideViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSideViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
