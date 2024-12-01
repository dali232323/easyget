import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckInfoComponent } from './truck-info.component';

describe('TruckInfoComponent', () => {
  let component: TruckInfoComponent;
  let fixture: ComponentFixture<TruckInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruckInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
