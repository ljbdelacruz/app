import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import myGlobal =require('./../../services/properties/globals.properties');

@Component({
  selector: 'login-component',
  templateUrl:'app/components/Login/Login.html'
})
//this is the main class
export class LoginComponent {
//assign local variable to global variable
//    username=myGlobal.username;
    onLogin():void{
        alert("Login");
        //this.username=myGlobal.username;
    }
}
