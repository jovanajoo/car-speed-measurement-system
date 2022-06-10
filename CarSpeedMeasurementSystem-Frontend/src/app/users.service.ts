import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:5000/api/administrators/get');
  }

  getUserById(adminId?: number): Observable<User> {
    return this.http.get<User>('http://localhost:5000/api/administrators/get/' + adminId);
  }

  getUserByUsername(username?: string): Observable<User> {
    return this.http.get<User>('http://localhost:5000/api/administrators/GetByUsername/' + username);
  }

  deleteUserById(adminId?: number): Observable<any> {
    return this.http.delete('http://localhost:5000/api/administrators/delete/' + adminId);
  }

  updateUser(user?: User): Observable<User> {
    return this.http.put<User>('http://localhost:5000/api/administrators/update', JSON.stringify(user), this.httpOptions);
  }

  insertUser(user?: User): Observable<User> {
    return this.http.post<User>('http://localhost:5000/api/administrators/insert', JSON.stringify(user), this.httpOptions);
  }

  usernameExists(username?: string): Observable<any> {
    return this.http.get('http://localhost:5000/api/administrators/UsernameExists/' + username);
  }
}
