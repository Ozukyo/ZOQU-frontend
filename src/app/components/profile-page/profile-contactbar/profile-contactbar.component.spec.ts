import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContactbarComponent } from './profile-contactbar.component';

describe('ProfileContactbarComponent', () => {
  let component: ProfileContactbarComponent;
  let fixture: ComponentFixture<ProfileContactbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileContactbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileContactbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
