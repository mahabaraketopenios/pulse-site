import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationUseComponent } from './accreditation-use.component';

describe('AccreditationUseComponent', () => {
  let component: AccreditationUseComponent;
  let fixture: ComponentFixture<AccreditationUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccreditationUseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccreditationUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
