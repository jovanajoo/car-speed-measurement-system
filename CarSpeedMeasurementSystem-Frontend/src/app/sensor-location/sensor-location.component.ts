import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SensorLocation } from '../models/SensorLocations';
import { SensorLocationsService } from '../sensor-locations.service';
import { DatePipe } from '@angular/common';
import { Sensor } from '../models/Sensor';
import { SensorsService } from '../sensors.service';
import { GoogleMap, MapMarker } from '@angular/google-maps';
declare var $: any;

@Component({
  selector: 'app-sensor-location',
  templateUrl: './sensor-location.component.html',
  styleUrls: ['./sensor-location.component.css']
})
export class SensorLocationComponent implements OnInit {

  constructor(private sensorLocationService: SensorLocationsService, private sensorService: SensorsService, private route: ActivatedRoute, private router: Router) { }

  sensorLocation?: SensorLocation;
  currentSensor?: Sensor;

  sensors?: Sensor[];

  selectedSensorNo = new FormControl('');
  startDate = new FormControl(new Date().toISOString().slice(0, 10));
  latitude = new FormControl(0);
  longitude = new FormControl(0);
  maxSpeed = new FormControl('');
  description = new FormControl('');


  sensorSerialNoErr?: boolean;
  maxSpeedErr?: boolean;
  locationErr?: boolean;

  center?: google.maps.LatLngLiteral = {
    lat: 44.80525279492607,
    lng: 20.470766186506555
  };

  options: google.maps.MapOptions = {
    disableDoubleClickZoom: true,
    maxZoom: 18,
    minZoom: 12,
    fullscreenControl: false,
    streetViewControl: false
  }

  marker = {
    position: {
      lat: 0,
      lng: 0,
    },
    label: {
      color: '',
    },
    title: '',
    options: { animation: google.maps.Animation.BOUNCE },
  };

  action = '';

  ngOnInit(): void {
    this.action = String(this.route.snapshot.paramMap.get('action'));
    if (this.action == 'view') {
      const entryNo = Number(this.route.snapshot.paramMap.get('entryNo'));
      this.getSensorLocation(entryNo);
    }
    else {
      this.getSensors();
      this.options.minZoom = 6;
    }
  }

  getSensorLocation(entryNo?: number): void {
    this.sensorLocationService.getSensorLocation(entryNo).subscribe(data => {
      this.sensorLocation = data;
      this.setMarker(this.sensorLocation.latitude!, this.sensorLocation.longitude!);
      this.center = {
        lat: this.sensorLocation.latitude!,
        lng: this.sensorLocation.longitude!,
      }
      this.sensorService.getSensorBySerialNo(this.sensorLocation.sensorSerialNumber).subscribe(res => {
        this.currentSensor = res;
      })
    });
  }

  setMarker(lat: number, lon: number) {
    this.marker = {
      position: {
        lat: lat,
        lng: lon
      },
      label: {
        color: 'red',
      },
      title: 'Sensor: ' + this.sensorLocation?.sensorSerialNumber,
      options: {
        animation: google.maps.Animation.BOUNCE
      },
    };
  }

  doubleClickMap(event: google.maps.MapMouseEvent) {
    console.log(event);
    this.latitude.setValue(event.latLng!.lat());
    this.longitude.setValue(event.latLng!.lng());
    this.marker = {
      position: {
        lat: Number(this.latitude.value),
        lng: Number(this.longitude.value)
      },
      label: {
        color: 'red',
      },
      title: 'Sensor: ' + this.sensorLocation?.sensorSerialNumber,
      options: {
        animation: google.maps.Animation.BOUNCE
      },
    };
  }

  getSensors(): void {
    this.sensorService.getInactiveSensors().subscribe(res => {
      this.sensors = res;
    });
  }


  insertSensorLocation(): void {

    if (Number(this.selectedSensorNo.value) == 0 ||
      Number(this.latitude.value) == 0 ||
      Number(this.longitude.value) == 0 ||
      Number(this.maxSpeed.value) == 0) {
      return;
    }

    this.sensorSerialNoErr = Number(this.selectedSensorNo.value) == 0;
    this.locationErr = Number(this.latitude.value) == 0 || Number(this.longitude.value) == 0;
    this.maxSpeedErr = Number(this.maxSpeed.value) == 0;
    if (this.sensorSerialNoErr || this.locationErr || this.maxSpeedErr) {
      return;
    }

    let newSensorLocation: SensorLocation = new SensorLocation();
    newSensorLocation.sensorSerialNumber = Number(this.selectedSensorNo.value);
    newSensorLocation.startDate = new Date(this.startDate.value!);
    newSensorLocation.latitude = Number(this.latitude.value);
    newSensorLocation.longitude = Number(this.longitude.value);
    newSensorLocation.maxSpeed = Number(this.maxSpeed.value);
    newSensorLocation.description = this.description.value!;
    newSensorLocation.active = true;
    this.sensorLocationService.insertSensorLocation(newSensorLocation).subscribe(res => {
      this.toggleToast();
    });
  }

  toggleToast() {
    $('.toast').toggleClass('show');
    setTimeout(() => {
      $('.toast').toggleClass('show');
      this.router.navigate(['/sensorLocations']);
    }, 2500);
  }

}
