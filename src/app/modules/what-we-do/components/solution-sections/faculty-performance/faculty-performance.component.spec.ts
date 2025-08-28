import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyPerformanceComponent } from './faculty-performance.component';

describe('FacultyPerformanceComponent', () => {
  let component: FacultyPerformanceComponent;
  let fixture: ComponentFixture<FacultyPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacultyPerformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
