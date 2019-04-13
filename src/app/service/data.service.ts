import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

   getEmployees() {
      return this.http.get('http://localhost:8080//employee/all');
   }


   /* getEmployees (): Observable<Employee> {
    return this.http.get<Employee>("http://localhost:8080//employee/all");
  }*/

  register (employee : Employee): Observable<Employee> {

    return this.http.post<Employee>("http://localhost:8080/employee/register", employee, httpOptions);
  }

}
