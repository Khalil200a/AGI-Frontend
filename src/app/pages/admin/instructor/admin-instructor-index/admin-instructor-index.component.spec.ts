import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInstructorIndexComponent } from './admin-instructor-index.component';

describe('AdminInstructorIndexComponent', () => {
  let component: AdminInstructorIndexComponent;
  let fixture: ComponentFixture<AdminInstructorIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInstructorIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInstructorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
