import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { SensorReading } from '../models/SensorReading';
import { SensorReadingService } from '../sensor-reading.service';

Chart.register(...registerables);
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chartBar: any;

  
  constructor(private sensorReadingService : SensorReadingService) { }

  ngOnInit(): void {
    
    this.sensorReadingService.getCurrentMonthReadings()
    .subscribe(resp =>{
      let timestamp = resp.map(resp => resp.timestemp);
      console.log(timestamp);
      let speeding = resp.map(resp => resp.speeding);
      console.log(speeding);
      let falseSpeeding = speeding.filter(s => !s).length;
      let trueSpeeding = speeding.filter(s => s).length;

      this.chartBar = new Chart("chartPie", {
        type: 'pie',
        data: {
            labels: ['Not speeding', 'Speeding'],
            datasets: [{
                data: [falseSpeeding, trueSpeeding],
                backgroundColor: [
                    'rgb(32, 201, 151, 1)',
                    'rgba(32, 201, 151, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 255, 255, 1)'
                ],
                borderWidth: 5
            }]
        },
      });

    });
    this.sensorReadingService.getSixHourReadings()
    .subscribe(resp => {
      let firstArray = resp[0] as SensorReading[];
      let secondArray = resp[1] as SensorReading[];
      let thirdArray = resp[2] as SensorReading[];
      let fourthArray = resp[3] as SensorReading[];
      console.log(firstArray.length);
      console.log(secondArray.length);
      console.log(thirdArray.length);
      console.log(fourthArray.length);

      const chartLine = new Chart("chartBar", {
        type: 'bar',
        data: {
            labels: ['0h - 6h', '6h - 12h', '12h - 18h', '18h - 24h'],
            datasets: [{
              label: 'Mesurements',
                data: [firstArray.length, secondArray.length, thirdArray.length, fourthArray.length],
                backgroundColor: [
                    'rgb(32, 201, 151, 1)',
                    'rgb(32, 201, 151, 1)',
                    'rgb(32, 201, 151, 1)',
                    'rgb(32, 201, 151, 1)'
                ],
                borderColor: [
                    'rgba(255, 255, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
      });
      
    })

  }

}
