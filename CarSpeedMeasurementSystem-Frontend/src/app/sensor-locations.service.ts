import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SensorLocation } from './models/SensorLocations';

@Injectable({
  providedIn: 'root'
})
export class SensorLocationsService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getActiveAllSensorsLocations(): Observable<SensorLocation[]> {
    return this.http.get<SensorLocation[]>('http://localhost:5000/api/sensorlocations/getactive');
  }

  // deleteSensorBySerialNo(serialNo?: number): Observable<any> {
  //   return this.http.delete('http://localhost:5000/api/sensors/delete/' + serialNo);
  // }

  setSensorLocationInactive(): Observable<SensorLocation[]> {
    return this.http.get<SensorLocation[]>('http://localhost:5000/api/sensorlocations/getactive');
  }

  getSensorLocation(entryNo?: number): Observable<SensorLocation> {
    return this.http.get<SensorLocation>('http://localhost:5000/api/sensorlocations/get/' + entryNo);
  }

  updateSensorLocation(sensorLocation?: SensorLocation): Observable<SensorLocation> {
    return this.http.put<SensorLocation>('http://localhost:5000/api/sensorlocations/update', JSON.stringify(sensorLocation), this.httpOptions);
  }

  insertSensorLocation(sensorLocation?: SensorLocation): Observable<SensorLocation> {
    return this.http.post<SensorLocation>('http://localhost:5000/api/sensorlocations/insert', JSON.stringify(sensorLocation), this.httpOptions);
  }

}
