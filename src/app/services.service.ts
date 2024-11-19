import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private dps_apiUrl = 'http://localhost:5000/api/dpss';
  private user_apiUrl = 'http://localhost:5000/api/users';
  private expert_apiUrl = 'http://localhost:5000/api/expertises';

  constructor(private http: HttpClient) {}

  getAllDps(): Observable<any[]> {
    return this.http.get<any[]>(this.dps_apiUrl);
  }

  getDpsByUserId(id: number): Observable<any[]> {
    const url = `${this.dps_apiUrl}/byUserId/${id}`;
    return this.http.get<any[]>(url);
  }

  getDpsById(id: number): Observable<any[]> {
    const url = `${this.dps_apiUrl}/${id}`;
    return this.http.get<any[]>(url);
  }

  postDps(data: any): Observable<any> {
    const url = `${this.dps_apiUrl}`;
    return this.http.post<any>(url, data);
  }

  deleteDps(id: number): Observable<any[]> {
    const url = `${this.dps_apiUrl}/${id}`;
    return this.http.delete<any[]>(url);
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.user_apiUrl);
  }

  getUserById(id: number): Observable<any[]> {
    const url = `${this.user_apiUrl}/byId/${id}`;
    return this.http.get<any[]>(url);
  }

  postUser(data: any): Observable<any> {
    const url = `${this.user_apiUrl}`;
    return this.http.post<any>(url, data);
  }
  getUserByEmail(email: string): Observable<any[]> {
    const url = `${this.user_apiUrl}/byEmail/${email}`;
    return this.http.get<any[]>(url);
  }

  deleteUser(id: number): Observable<any[]> {
    const url = `${this.user_apiUrl}/${id}`;
    return this.http.delete<any[]>(url);
  }

  updateDps(data: any): Observable<any> {
    const url = `${this.dps_apiUrl}/dpsUpdated/`;
    return this.http.put<any>(url, data);
  }

  updateUser(data: any): Observable<any> {
    const url = `${this.user_apiUrl}/userUpdated/`;
    return this.http.put<any>(url, data);
  }
  updateExp(data: any): Observable<any> {
    const url = `${this.expert_apiUrl}/expUpdated/`;
    return this.http.put<any>(url, data);
  }

  getAllExp(): Observable<any[]> {
    return this.http.get<any[]>(this.expert_apiUrl);
  }

  getExpByUserId(id: number): Observable<any[]> {
    const url = `${this.expert_apiUrl}/byUserId/${id}`;
    return this.http.get<any[]>(url);
  }

  getExpById(id: number): Observable<any[]> {
    const url = `${this.expert_apiUrl}/${id}`;
    return this.http.get<any[]>(url);
  }

  postExp(data: any): Observable<any> {
    const url = `${this.expert_apiUrl}`;
    return this.http.post<any>(url, data);
  }

  deleteExp(id: number): Observable<any[]> {
    const url = `${this.expert_apiUrl}/${id}`;
    return this.http.delete<any[]>(url);
  }
}
