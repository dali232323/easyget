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
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-driver-overview',
  standalone: true,
  imports: [CommonModule, NzGridModule,NzCardModule,NzDividerModule,NzButtonModule, NzModalModule, NzInputModule, NzIconModule, NzToolTipModule, ReactiveFormsModule, FormsModule],
  templateUrl: './driver-overview.component.html',
  styleUrl: './driver-overview.component.css'
})
export class DriverOverviewComponent {
  newDriverForm:FormGroup
 UserName="mohamed";
 isEditMode = false;
 editedDriverId: string | null = null;
 licenseCategories: string[] = ['A', 'B', 'C', 'D', 'E'];
  ListOfDrivers:DriverCompact[]=[];
  filteredDrivers: DriverCompact[] = []; // Gefilterte Liste
  filterText: string = ''; // Filter-String
  actualDriverInfo!:Driver;
  constructor(
    private driverApiService:DriverService, 
    private testService:TestService
  ){


    this.newDriverForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      dateOfBirth: new FormControl('', [Validators.required]),
      address: new FormGroup({
        street: new FormControl(''),
        postalCode: new FormControl(''),
        city: new FormControl(''),
        country: new FormControl('')
      }),
      location: new FormGroup({
        latitude: new FormControl(0),
        longitude: new FormControl(0)
      }),
      driverLicense: new FormGroup({
        licenseNumber: new FormControl(''),
        category: new FormControl([]),
        expiryDate: new FormControl('')
      }),
      employmentDetails: new FormGroup({
        hireDate: new FormControl(''),
        status: new FormControl(''),
        position: new FormControl(''),
        assignedVehicle: new FormControl('')
      }),
      emergencyContact: new FormGroup({
        name: new FormControl(''),
        relationship: new FormControl(''),
        phone: new FormControl('')
      }),
      documents: new FormControl([]),
      notes: new FormControl(''),
      createdAt: new FormControl(''),
      updatedAt: new FormControl('')
    });
    
  }

  ngOnInit(){
this.getAllDriver()
  

this.UserName = this.testService.doubleTheText(this.UserName)

  }


  filterDrivers(): void {
    const searchText = this.filterText.toLowerCase(); // Suchtext in Kleinbuchstaben
    this.filteredDrivers = this.ListOfDrivers.filter((driver) => {
      return (
        driver.firstName.toLowerCase().includes(searchText) ||
        driver.lastName.toLowerCase().includes(searchText) ||
        driver.phone.includes(searchText) ||
        driver.email.toLowerCase().includes(searchText)
      );
    });
  }

  editDriver(driver: Driver): void {
    this.isEditMode = true;
    this.editedDriverId = driver._id || null; // Speichere die Fahrer-ID für den Update-Aufruf
    this.newDriverForm.patchValue(driver);
    this.showModal();
  }
  


  getAllDriver(){
    this.driverApiService.getAllDrivers().subscribe((res)=>{
      this.ListOfDrivers=res;
      this.filteredDrivers=this.ListOfDrivers
    })
  }

  showDriverDetails(id:string){
    this.driverApiService.getDriverPerId(id).subscribe((res)=>{
      this.actualDriverInfo=res
    })
  }


  createNewDriverObject() {
    const newdriver: Driver = {
      firstName: this.newDriverForm.controls['firstName'].value,
      lastName: this.newDriverForm.controls['lastName'].value,
      dateOfBirth: this.newDriverForm.controls['dateOfBirth'].value,
      phone: this.newDriverForm.controls['phone'].value,
      email: this.newDriverForm.controls['email'].value,
      address: this.newDriverForm.controls['address'].value,
      location: this.newDriverForm.controls['location'].value,
      driverLicense: this.newDriverForm.controls['driverLicense'].value,
      employmentDetails: this.newDriverForm.controls['employmentDetails'].value,
      emergencyContact: this.newDriverForm.controls['emergencyContact'].value,
      documents: this.newDriverForm.controls['documents'].value,
      notes: this.newDriverForm.controls['notes'].value,
      createdAt: this.newDriverForm.controls['createdAt'].value || new Date().toISOString(),
      updatedAt: this.newDriverForm.controls['updatedAt'].value || new Date().toISOString()
    };
  
    // this.driverApiService.createNewDriver(newdriver).subscribe((res) => {
    //   console.log(res);
    //   this.getAllDriver();
    // });
    return newdriver
  }
  




  isVisible = false;

  showModal(): void {
    if (!this.isEditMode) {
      this.newDriverForm.reset(); // Leere das Formular im Create-Modus
    }
    this.isVisible = true;
  }

  saveDriver(): void {
    const createdDriver:Driver=this.createNewDriverObject()
    if (this.isEditMode && this.editedDriverId) {
      // Update-Modus
      this.driverApiService.updateDriver(this.editedDriverId, createdDriver).subscribe(() => {
        this.getAllDriver();
        this.isVisible = false;
        this.isEditMode = false;
      });
    } else {
      // Create-Modus
      this.driverApiService.createNewDriver(createdDriver).subscribe(() => {
        this.getAllDriver();
        this.isVisible = false;
      });
    }
  }

  handleCancel(): void {
    this.isVisible = false;
    this.isEditMode = false;
  }


}
