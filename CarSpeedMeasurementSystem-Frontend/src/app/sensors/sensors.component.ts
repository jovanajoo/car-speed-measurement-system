import { Component, OnInit } from '@angular/core';
import { Sensor } from '../models/Sensor';
import { SensorsService } from '../sensors.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {

  sensors?: Sensor[];

  constructor(private sensorService: SensorsService) { }

  ngOnInit(): void {
    this.getSensors();
  }

  deleteSensor(serialNo?: any): void {
    this.sensorService.deleteSensorBySerialNo(serialNo).subscribe(res => {
      this.getSensors();
    });
  }

  getSensors(): void {
    this.sensorService.getAllSensors().subscribe(data => {
      this.sensors = data;
    });
  }

}
