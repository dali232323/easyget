import { Component } from '@angular/core';
import { TruckApiService } from '../../services/truck-api.service';
import { DriverService } from '../../services/driver.service';
import { NzCardComponent } from 'ng-zorro-antd/card';


@Component({
  selector: 'app-truck-info',
  standalone: true,
  imports: [NzCardComponent],
  templateUrl: './truck-info.component.html',
  styleUrl: './truck-info.component.css'
})
export class TruckInfoComponent {
truckIdExemple="67425d0b63b8fd6830e4bc31"; 
TestInformations:any; 
//TypedInformations:TruckInfo; 
constructor(
 private exempleService:DriverService
 //import Truck 
){}


getData(){

  this.exempleService.getDriverPerId(this.truckIdExemple).subscribe((result)=>{
    this.TestInformations=result
  })

}

}
