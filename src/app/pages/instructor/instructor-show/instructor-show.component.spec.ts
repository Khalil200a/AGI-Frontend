import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorShowComponent } from './instructor-show.component';

describe('InstructorShowComponent', () => {
  let component: InstructorShowComponent;
  let fixture: ComponentFixture<InstructorShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
