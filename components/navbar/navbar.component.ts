import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NavigationItem} from './../../objects/class.object';

@Component({
  selector: 'navbar',
  templateUrl:'app/components/navbar/navbar.html'
})
//this is the main class 
export class NavbarComponent {
    @Input() navItems:NavigationItem[];
}
