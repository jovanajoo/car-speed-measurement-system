import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensor } from './models/Sensor';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  constructor(private http: HttpClient) { }

  getAllSensors(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>('http://localhost:5000/api/sensors/get');
  }

  getSensorBySerialNo(serialNo: number): Observable<Sensor> {
    return this.http.get<Sensor>('http://localhost:5000/api/sensors/get/' + serialNo);
  }

  deleteSensorBySerialNo(serialNo?: number): Observable<any> {
    return this.http.delete('http://localhost:5000/api/sensors/delete/' + serialNo);
  }
}
