import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import myGlobal = require('./../../services/properties/globals.properties');

@Component({
  selector: 'registration-component',
  templateUrl:'app/components/registration/registration.html'
})
//this is the main class 
export class RegistrationComponent {
//assign local variable to global variable
//  username=myGlobal.username;
  password="";
  OnSubmit():void{
//    myGlobal.username=this.password;
//    this.username=myGlobal.username;
  }
}
