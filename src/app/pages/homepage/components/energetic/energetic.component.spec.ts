import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergeticComponent } from './energetic.component';

describe('EnergeticComponent', () => {
  let component: EnergeticComponent;
  let fixture: ComponentFixture<EnergeticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergeticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergeticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
