import { Component } from '@angular/core';
import {RouterModule,  Router, ActivatedRoute, Params} from '@angular/router';
import {PropertyGetter} from './../../services/methods/PropertyGetter.method';
import {Tabs} from './../../objects/class.object';
@Component({
  selector: 'tutorial-module',
  templateUrl:'app/modules/Tutorials/Tutorials.html'
})
export class TutorialsModule {
    private router:Router; 
    selectedOption=1;
    tabs:Tabs[]=null;
    constructor(route : Router, private propertyGetter: PropertyGetter){
        this.tabs=propertyGetter.getTabs();
    }
    ChangeOption(option:number):void{
        this.selectedOption=option;
    }
}

