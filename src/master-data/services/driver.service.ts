import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Driver, DriverCompact } from '../interfaces/driver.interface';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(
    private http:HttpClient
  ) { }



  
public getAllDrivers(){
  return this.http.get<DriverCompact[]>("http://localhost:3001/driver")
  }


  public getDriverPerId(id: string) {
    return this.http.get<Driver>(`http://localhost:3001/driver/${id}`);
  }



  public createNewDriver(newDriver:Driver){
    const result = this.http.post("http://localhost:3001/driver",newDriver)
    return  result 
  }

  public updateDriver(id: string, newDriver: Driver) {
    const url = `http://localhost:3001/driver/${id}`; 
    return this.http.put<Driver>(url, newDriver); 
  }




  
}
