import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import myGlobal = require('./../../services/properties/globals.properties');
import {Thumbnail} from './../../objects/class.object';


@Component({
  selector: 'content-display-component',
  templateUrl:'app/components/ContentDisplay/ContentDisplay.html'
})
//this is the main class 
export class ContentDisplayComponent {
    @Input() title:String;
    @Input() content:String;
    @Input() mainImage:Thumbnail;
    @Input() images:Thumbnail;
}
