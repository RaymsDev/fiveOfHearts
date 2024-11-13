import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassagesComponent } from './massages.component';

describe('MassagesComponent', () => {
  let component: MassagesComponent;
  let fixture: ComponentFixture<MassagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MassagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
