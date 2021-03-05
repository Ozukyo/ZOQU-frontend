import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAnnouncementsPageComponent } from './all-announcements-page.component';

describe('AllAnnouncementsPageComponent', () => {
  let component: AllAnnouncementsPageComponent;
  let fixture: ComponentFixture<AllAnnouncementsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAnnouncementsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAnnouncementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
