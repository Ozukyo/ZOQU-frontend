import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizationInfoComponent } from './localization-info.component';

describe('LocalizationInfoComponent', () => {
  let component: LocalizationInfoComponent;
  let fixture: ComponentFixture<LocalizationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalizationInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
