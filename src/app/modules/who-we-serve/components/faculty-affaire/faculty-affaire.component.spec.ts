import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAffaireComponent } from './faculty-affaire.component';

describe('FacultyAffaireComponent', () => {
  let component: FacultyAffaireComponent;
  let fixture: ComponentFixture<FacultyAffaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacultyAffaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyAffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
