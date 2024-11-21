import { Component } from '@angular/core';
import { Customer } from '../../interfaces/customers.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NzCardModule } from 'ng-zorro-antd/card';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NzCardModule,NzButtonModule, ReactiveFormsModule, FormsModule, NzInputModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  public user:string="";
  public list:Customer[]=[];
  public name= new FormControl("");
  public contact= new FormControl("");
  public company= new FormControl("");
  public address= new FormControl("");
  public shipping= new FormControl("");



constructor(
  private http:HttpClient, private fb:FormBuilder)
{
}


ngOnInit(){
  //this.newObs.subscribe()
  this.addNameToUser("mohamewd");

  this.getCustomersData();
  


  // this.name.valueChanges.subscribe((val)=>{
  //   console.log(val)
  // })

}


//API 
//Save Liste
//asyncrone
private getCustomersData(){
this.http.get("http://localhost:3000/api/customers").subscribe(
(result:any)=>{
  console.log(result);
  this.list=result;
}) 
}


private PutCustomersData(customer:Customer){
  this.http.put("http://localhost:3000/api/customers",customer).subscribe(
  (result:any)=>{
    console.log(result);
    this.list=result;
  }) 
  }



private addNameToUser(name:string){
  this.user=name
}




addNewCustomer(){
  const id=100
const newCus:Customer={
  customer_id: id,
  customer_number: this.name.value!,
  company_name: this.name.value!,
  contact_info: this.name.value!,
  billing_address: this.name.value!,
  default_shipping_address: this.name.value!
}


  this.PutCustomersData(newCus)





  console.log("addNewCustomer works")
}




}


 