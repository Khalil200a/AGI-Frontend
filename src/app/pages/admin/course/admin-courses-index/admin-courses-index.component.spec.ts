import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursesIndexComponent } from './admin-courses-index.component';

describe('AdminCoursesIndexComponent', () => {
  let component: AdminCoursesIndexComponent;
  let fixture: ComponentFixture<AdminCoursesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCoursesIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCoursesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
