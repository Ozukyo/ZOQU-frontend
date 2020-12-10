import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingAnnouncementPageComponent } from './adding-announcement-page.component';

describe('AddingAnnouncementPageComponent', () => {
  let component: AddingAnnouncementPageComponent;
  let fixture: ComponentFixture<AddingAnnouncementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingAnnouncementPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingAnnouncementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
