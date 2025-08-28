import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysMonitoringComponent } from './surveys-monitoring.component';

describe('SurveysMonitoringComponent', () => {
  let component: SurveysMonitoringComponent;
  let fixture: ComponentFixture<SurveysMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurveysMonitoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveysMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
