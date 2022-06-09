import { Injectable } from '@angular/core';
import { SensorReading } from './models/SensorReading';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SensorReadingService {

  constructor(private http: HttpClient) { }

  getAllSensorReadings(): Observable<SensorReading[]>{
    return this.http.get<SensorReading[]>("http://localhost:5000/api/sensorreadings/get");
  }
  getCurrentMonthReadings() : Observable<SensorReading[]>{
    return this.http.get<SensorReading[]>("http://localhost:5000/api/sensorreadings/GetCurrentMonthReadings");
  }
  getSixHourReadings(): Observable<SensorReading[]>{
    return this.http.get<SensorReading[]>("http://localhost:5000/api/sensorreadings/GetSixHourReadings");
  }
  getSensorReadingBySerialNo(serialNo?: number): Observable<SensorReading[]> {
    return this.http.get<SensorReading[]>('http://localhost:5000/api/sensorreadings/get/' + serialNo);
  }
  getSensorReadingByLocation(locationId?: number): Observable<SensorReading[]> {
    return this.http.get<SensorReading[]>('http://localhost:5000/api/sensorreadings/location/' + locationId);
  }
}
