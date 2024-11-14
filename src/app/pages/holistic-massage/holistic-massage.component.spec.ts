import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolisticMassageComponent } from './holistic-massage.component';

describe('HolisticMassageComponent', () => {
  let component: HolisticMassageComponent;
  let fixture: ComponentFixture<HolisticMassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolisticMassageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolisticMassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
