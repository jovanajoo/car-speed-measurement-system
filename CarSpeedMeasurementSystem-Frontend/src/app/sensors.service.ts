import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensor } from './models/Sensor';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAllSensors(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>('http://localhost:5000/api/sensors/get');
  }

  getSensorBySerialNo(serialNo?: number): Observable<Sensor> {
    return this.http.get<Sensor>('http://localhost:5000/api/sensors/get/' + serialNo);
  }

  deleteSensorBySerialNo(serialNo?: number): Observable<any> {
    return this.http.delete('http://localhost:5000/api/sensors/delete/' + serialNo);
  }

  updateSensor(sensor?: Sensor): Observable<Sensor> {
    return this.http.put<Sensor>('http://localhost:5000/api/sensors/update', JSON.stringify(sensor), this.httpOptions);
  }

  insertSensor(sensor?: Sensor): Observable<Sensor> {
    return this.http.post<Sensor>('http://localhost:5000/api/sensors/insert', JSON.stringify(sensor), this.httpOptions);
  }

  getInactiveSensors(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>('http://localhost:5000/api/sensors/getinactive');
  }

}
