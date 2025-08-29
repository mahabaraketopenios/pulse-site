import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntitutionalLeadersComponent } from './intitutional-leaders.component';

describe('IntitutionalLeadersComponent', () => {
  let component: IntitutionalLeadersComponent;
  let fixture: ComponentFixture<IntitutionalLeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntitutionalLeadersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntitutionalLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
