import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PropertyGetter} from './../../services/methods/PropertyGetter.method';

import {Tabs} from './../../objects/class.object';
@Component({
  selector: 'tutorial-component',
  templateUrl:'app/components/tutorials/tutorials.html'
})

//this is the main class 
export class TutorialsComponent {
    @Input() tutorialSelected:number;
    tabsPSPTutorial:Tabs[]=null;
    optionSelectedPSP=1;
    tabsPSVTutorial:Tabs[]=null;
    optionSelectedPSV=1;

    constructor(private propertyGetter:PropertyGetter){
      this.tabsPSPTutorial=propertyGetter.GetTabsPSPTutorial();
      this.tabsPSVTutorial=propertyGetter.GetTabsPSVTutorial();
    }
    onSelectOptionPSP(option:number):void{
      this.optionSelectedPSP=option;
      alert("PSP Option "+this.optionSelectedPSP);
    }
    onSelectOptionPSV(option:number):void{
      this.optionSelectedPSV=option;
      alert("PSV Option "+this.optionSelectedPSV);
    }
}
