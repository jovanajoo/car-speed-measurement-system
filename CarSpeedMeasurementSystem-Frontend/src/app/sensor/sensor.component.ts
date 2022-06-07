import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Sensor } from '../models/Sensor';
import { SensorsService } from '../sensors.service';
declare var $: any;

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  sensor?: Sensor;

  serialNo = new FormControl('');
  model = new FormControl('');
  description = new FormControl('');

  action = '';

  constructor(private sensorService: SensorsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.action = String(this.route.snapshot.paramMap.get('action'));
    if (this.action == 'update') {
      const serialNo = Number(this.route.snapshot.paramMap.get('serial_no'));
      this.getSensor(serialNo);
    }
  }

  getSensor(sensorNo?: number): void {
    this.sensorService.getSensorBySerialNo(sensorNo).subscribe(data => {
      this.sensor = data;
      this.model.setValue(this.sensor?.model);
      this.description.setValue(this.sensor?.description);
    });
  }

  updateSensor() {
    this.sensor!.model = this.model.value;
    this.sensor!.description = this.description.value;
    this.sensorService.updateSensor(this.sensor).subscribe(res => {
      this.getSensor(Number(this.sensor?.serialNo));
      this.toggleToast();
    });
  }

  insertSensor() {
    const newSensor: Sensor = new Sensor();
    newSensor!.serialNo = this.serialNo.value;
    newSensor!.model = this.model.value;
    newSensor!.description = this.description.value;
    console.log(newSensor);
    this.sensorService.insertSensor(newSensor).subscribe(res => {
      this.getSensor(Number(newSensor.serialNo));
      this.toggleToast();
    });
  }

  toggleToast() {
    $('.toast').toggleClass('show');
    setTimeout(() => {
      $('.toast').toggleClass('show');
    }, 2500);
  }

}
