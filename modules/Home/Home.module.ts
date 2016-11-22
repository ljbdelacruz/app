import { Component } from '@angular/core';
import {PropertyGetter} from './../../services/methods/PropertyGetter.method';
import {Tabs} from './../../objects/class.object';
@Component({
  selector: 'home-module',
  templateUrl:'app/modules/Home/Home.html'
})
export class HomeModule { 
    tabs:Tabs[]=null;
    optionSelected:number;
    constructor(private propertyGetter:PropertyGetter){
      this.tabs=propertyGetter.getTabs();
    }
    checkOptionSelected(option:number):void{
      alert(option);
    }


}

