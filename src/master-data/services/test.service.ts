import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }


public doubleTheText(test:string){

  return test  + " " +test
}

}
