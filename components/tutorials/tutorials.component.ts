import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Tabs} from './../../objects/class.object';
@Component({
  selector: 'tutorial-component',
  templateUrl:'app/components/tutorials/tutorials.html'
})
//this is the main class 
export class TutorialsComponent {
    @Input() tutorialSelected:number;

}
