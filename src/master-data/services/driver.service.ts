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
    debugger

    const result = this.http.post("http://localhost:3001/driver",newDriver)
    return  result 
  }



  mockDriver={
    address: {
      street: "Musterstraße 123",
      postalCode: "12345",
      city: "Musterstadt",
      country: "Germany"
    },
    location: {
      latitude: 52.52,
      "longitude": 13.405
    },
    "driverLicense": {
      "licenseNumber": "DE1234567890",
      "category": [
        "B",
        "C"
      ],
      "expiryDate": "2030-12-31T00:00:00.000Z"
    },
    "employmentDetails": {
      "hireDate": "2022-01-01T00:00:00.000Z",
      "status": "active",
      "position": "Driver",
      "assignedVehicle": "Mercedes Sprinter"
    },
    "emergencyContact": {
      "name": "",
      "relationship": "",
      "phone": ""
    },
    
    "firstName": "66546",
    "lastName": "54656",
    "dateOfBirth": "1990-01-15T00:00:00.000Z",
    "phone": "+49 151 12345678",
    "email": "max.mustermann@example.com",
    "documents": [
      {
     
        "type": "passport",
        "documentNumber": "C1234567",
        "expiryDate": "2028-05-10T00:00:00.000Z"
      },
      {
      
        "type": "medicalCertificate",
        "issuedDate": "2023-06-15T00:00:00.000Z",
        "expiryDate": "2024-06-15T00:00:00.000Z"
      }
    ],
   
    "createdAt": "2024-11-10T10:00:00.000Z",
    "updatedAt": "2024-11-10T12:00:00.000Z"
  }
  
}
