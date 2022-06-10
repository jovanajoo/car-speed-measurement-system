import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  serialNo = new UntypedFormControl('');
  model = new UntypedFormControl('');
  description = new UntypedFormControl('');

  serialNoErr?: boolean;
  modelErr?: boolean;

  action = '';

  constructor(private sensorService: SensorsService, private route: ActivatedRoute, private router: Router) { }

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
    this.modelErr = String(this.model.value).trim().length == 0;
    if (this.modelErr) {
      return;
    }
    this.sensor!.model = this.model.value;
    this.sensor!.description = this.description.value;
    this.sensorService.updateSensor(this.sensor).subscribe(res => {
      this.toggleToast();
    });
  }

  insertSensor() {

    this.serialNoErr = Number(this.serialNo.value) == 0;
    this.modelErr = String(this.model.value).trim().length == 0;
    if (this.serialNoErr || this.modelErr) {
      return;
    }
    const newSensor: Sensor = new Sensor();
    newSensor!.serialNo = this.serialNo.value;
    newSensor!.model = this.model.value;
    newSensor!.description = this.description.value;
    console.log(newSensor);
    this.sensorService.insertSensor(newSensor).subscribe(res => {
      this.toggleToast();
    });
  }

  toggleToast() {
    $('.toast').toggleClass('show');
    setTimeout(() => {
      $('.toast').toggleClass('show');
      this.router.navigate(['/sensors']);
    }, 2500);
  }

}
