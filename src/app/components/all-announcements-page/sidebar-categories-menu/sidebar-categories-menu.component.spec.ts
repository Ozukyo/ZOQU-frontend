import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCategoriesMenuComponent } from './sidebar-categories-menu.component';

describe('SidebarCategoriesMenuComponent', () => {
  let component: SidebarCategoriesMenuComponent;
  let fixture: ComponentFixture<SidebarCategoriesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarCategoriesMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCategoriesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
