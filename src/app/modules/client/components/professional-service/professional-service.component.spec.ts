import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalServiceComponent } from './professional-service.component';

describe('ProfessionalServiceComponent', () => {
  let component: ProfessionalServiceComponent;
  let fixture: ComponentFixture<ProfessionalServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfessionalServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
