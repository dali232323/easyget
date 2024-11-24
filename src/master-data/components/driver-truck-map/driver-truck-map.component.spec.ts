import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTruckMapComponent } from './driver-truck-map.component';

describe('DriverTruckMapComponent', () => {
  let component: DriverTruckMapComponent;
  let fixture: ComponentFixture<DriverTruckMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverTruckMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverTruckMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
