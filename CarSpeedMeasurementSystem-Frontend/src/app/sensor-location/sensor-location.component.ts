import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SensorLocation } from '../models/SensorLocations';
import { SensorLocationsService } from '../sensor-locations.service';

@Component({
  selector: 'app-sensor-location',
  templateUrl: './sensor-location.component.html',
  styleUrls: ['./sensor-location.component.css']
})
export class SensorLocationComponent implements OnInit {

  constructor(private sensorLocationService: SensorLocationsService, private route: ActivatedRoute, private router: Router) { }

  sensorLocation?: SensorLocation;

  sensorSerialNo = new FormControl('');
  startDate = new FormControl('');
  latitude = new FormControl('');
  longitude = new FormControl('');
  maxSpeed = new FormControl('');
  description = new FormControl('');

  center?: google.maps.LatLngLiteral;

  markers?: any[] = [];

  action = '';

  ngOnInit(): void {
    this.action = String(this.route.snapshot.paramMap.get('action'));
    if (this.action == 'view') {
      const entryNo = Number(this.route.snapshot.paramMap.get('entryNo'));
      this.getSensorLocation(entryNo);
    }

  }

  getSensorLocation(entryNo?: number): void {
    console.log(entryNo);
    this.sensorLocationService.getSensorLocation(entryNo).subscribe(data => {
      this.sensorLocation = data;
      console.log(this.sensorLocation);
      this.addMarker(this.sensorLocation.latitude!, this.sensorLocation.longitude!);
      this.center = {
        lat: this.sensorLocation.latitude!,
        lng: this.sensorLocation.longitude!,
      }
    });
  }

  addMarker(lat: number, lon: number) {
    this.markers?.push({
      position: {
        lat: lat,
        lng: lon,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      options: { animation: google.maps.Animation.BOUNCE },
    })
  }

  insertSensorLocation(): void {

  }

}
