import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiriculumComponent } from './ciriculum.component';

describe('CiriculumComponent', () => {
  let component: CiriculumComponent;
  let fixture: ComponentFixture<CiriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CiriculumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
