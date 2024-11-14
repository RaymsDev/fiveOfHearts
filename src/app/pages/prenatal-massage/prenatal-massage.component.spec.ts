import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenatalMassageComponent } from './prenatal-massage.component';

describe('PrenatalMassageComponent', () => {
  let component: PrenatalMassageComponent;
  let fixture: ComponentFixture<PrenatalMassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrenatalMassageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrenatalMassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
