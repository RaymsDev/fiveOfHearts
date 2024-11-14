import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergeticTreatmentComponent } from './energetic-treatment.component';

describe('EnergeticTreatmentComponent', () => {
  let component: EnergeticTreatmentComponent;
  let fixture: ComponentFixture<EnergeticTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergeticTreatmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergeticTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
