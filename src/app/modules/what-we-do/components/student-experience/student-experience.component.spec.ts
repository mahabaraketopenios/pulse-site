import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExperienceComponent } from './student-experience.component';

describe('StudentExperienceComponent', () => {
  let component: StudentExperienceComponent;
  let fixture: ComponentFixture<StudentExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
