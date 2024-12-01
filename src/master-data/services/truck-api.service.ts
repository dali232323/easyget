import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TruckApiService {

  constructor(  private http:HttpClient) { }


  // public getDriverPerId(id: string) {
  //   return this.http.get<THIS IS THE TYPE>(`http://localhost:3001/driver/${id}`);
  // }

  
}
