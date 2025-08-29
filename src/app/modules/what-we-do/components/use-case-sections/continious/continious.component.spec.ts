import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContiniousComponent } from './continious.component';

describe('ContiniousComponent', () => {
  let component: ContiniousComponent;
  let fixture: ComponentFixture<ContiniousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContiniousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContiniousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
