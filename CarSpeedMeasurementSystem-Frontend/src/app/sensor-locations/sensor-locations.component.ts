import { Component, OnInit } from '@angular/core';
import { SensorLocation } from '../models/SensorLocations';
import { SensorLocationsService } from '../sensor-locations.service';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-sensor-locations',
  templateUrl: './sensor-locations.component.html',
  styleUrls: ['./sensor-locations.component.css']
})
export class SensorLocationsComponent implements OnInit {

  sensorLocations?: SensorLocation[];

  pipe = new DatePipe('en-US');;
  emptyDate = new Date('0001-01-01T00:00:00');

  constructor(private sensorLocationService: SensorLocationsService) { }

  ngOnInit(): void {
    this.getActiveSensorsLocations();
  }

  getActiveSensorsLocations(): void {
    this.sensorLocationService.getActiveAllSensorsLocations().subscribe(data => {
      this.sensorLocations = data;
    });
  }

  setSensorLocationInactive(entryNo: number): void {
    var newSensorLocation: SensorLocation = new SensorLocation();
    this.sensorLocationService.getSensorLocation(entryNo).subscribe(data => {
      newSensorLocation = data;
      newSensorLocation.active = false;
      this.sensorLocationService.updateSensorLocation(newSensorLocation).subscribe(data => {
        this.getActiveSensorsLocations();
      });
    });

  }

}
