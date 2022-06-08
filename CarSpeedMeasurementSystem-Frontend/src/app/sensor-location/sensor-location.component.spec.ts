import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorLocationComponent } from './sensor-location.component';

describe('SensorLocationComponent', () => {
  let component: SensorLocationComponent;
  let fixture: ComponentFixture<SensorLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
