import { Component } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { Address, Driver, DriverCompact, DriverLicense, EmergencyContact, EmploymentDetails, Location } from '../../interfaces/driver.interface';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { TestService } from '../../services/test.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-driver-overview',
  standalone: true,
  imports: [CommonModule, NzGridModule,NzCardModule,NzDividerModule,NzButtonModule, NzModalModule, NzInputModule, NzIconModule, NzToolTipModule, ReactiveFormsModule],
  templateUrl: './driver-overview.component.html',
  styleUrl: './driver-overview.component.css'
})
export class DriverOverviewComponent {
  newDriverForm:FormGroup
 UserName="mohamed"
  ListOfDrivers:DriverCompact[]=[];
  actualDriverInfo!:Driver;
  constructor(
    private driverApiService:DriverService, 
    private testService:TestService
  ){


    this.newDriverForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.min(18)]),
    });
  }

  ngOnInit(){
this.getAllDriver()
  

this.UserName = this.testService.doubleTheText(this.UserName)

  }


  getAllDriver(){
    this.driverApiService.getAllDrivers().subscribe((res)=>{
      this.ListOfDrivers=res
    })
  }

  showDriverDetails(id:string){
    this.driverApiService.getDriverPerId(id).subscribe((res)=>{
      this.actualDriverInfo=res
    })
  }


  createNewDriver(){

    const newadress:Address={
      street: '',
      postalCode: '',
      city: '',
      country: ''
    }

    const newLocation:Location={
      latitude: 0,
      longitude: 0
    }

    const employmentDetails:EmploymentDetails={
      hireDate: '',
      status: '',
      position: '',
      assignedVehicle: ''
    }
  

    const driverLicense:DriverLicense={
      licenseNumber: '',
      category: [],
      expiryDate: ''
    }
  

    const emergencyContact:EmergencyContact={
      name: '',
      relationship: '',
      phone: ''
    }
  
const newdriver:Driver={

  firstName: this.newDriverForm.controls["firstName"].value,
  lastName: this.newDriverForm.controls["lastName"].value,
  dateOfBirth: '',
  phone: this.newDriverForm.controls["phone"].value,
  email: this.newDriverForm.controls["email"].value,
  address: newadress,
  location: newLocation,
  driverLicense: driverLicense,
  employmentDetails: employmentDetails,
  emergencyContact: emergencyContact,
  documents: [],
  notes: '',
  createdAt: '',
  updatedAt: ''
}



    this.driverApiService.createNewDriver(newdriver).subscribe((res)=>{
      console.log(res)
      this.getAllDriver()
    })
  }




  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.createNewDriver()
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }


}
