import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sensor } from '../models/Sensor';
import { SensorsService } from '../sensors.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  sensor?: Sensor;

  constructor(private sensorService: SensorsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const serialNo = Number(this.route.snapshot.paramMap.get('serial_no'));
    this.getSensor(serialNo);
  }

  getSensor(sensorNo: number): void {
    this.sensorService.getSensorBySerialNo(sensorNo).subscribe(data => {
      this.sensor = data;
    });
  }


}
