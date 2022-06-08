import { Component, OnInit } from '@angular/core';
import { SensorReadingService } from '../sensor-reading.service';
import { SensorReading } from '../models/SensorReading';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sensor-reading',
  templateUrl: './sensor-reading.component.html',
  styleUrls: ['./sensor-reading.component.css']
})
export class SensorReadingComponent implements OnInit {

  sensorReadings?: SensorReading[];
  datePipe = new DatePipe('en-us');

  constructor(private sensorReadingService: SensorReadingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.GetAllSensorReading();
  }
  GetAllSensorReading(){
    this.sensorReadingService.getAllSensorReadings().subscribe(resp => {
      this.sensorReadings = resp;
      console.log(this.sensorReadings);
    })
  }
  GetSensorReadingBySerialNo(serialNo?: number){
    this.sensorReadingService.getSensorReadingBySerialNo(serialNo).subscribe(resp =>{
      this.sensorReadings = resp;
    })
  }

}
