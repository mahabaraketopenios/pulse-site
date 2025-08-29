import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentUseComponent } from './assessment-use.component';

describe('AssessmentUseComponent', () => {
  let component: AssessmentUseComponent;
  let fixture: ComponentFixture<AssessmentUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssessmentUseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
