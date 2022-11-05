import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentIndexComponent } from './admin-student-index.component';

describe('AdminStudentIndexComponent', () => {
  let component: AdminStudentIndexComponent;
  let fixture: ComponentFixture<AdminStudentIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStudentIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStudentIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
