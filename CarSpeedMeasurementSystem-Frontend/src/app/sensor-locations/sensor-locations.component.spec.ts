import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorLocationsComponent } from './sensor-locations.component';

describe('SensorLocationsComponent', () => {
  let component: SensorLocationsComponent;
  let fixture: ComponentFixture<SensorLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorLocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
