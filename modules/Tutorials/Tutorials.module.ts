import { Component } from '@angular/core';
import {RouterModule,  Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'tutorial-module',
  templateUrl:'app/modules/Tutorials/Tutorials.html'
})
export class TutorialsModule {
    private router:Router; 
    constructor(route : Router){
        this.RequestHttpData();
    }
    RequestHttpData():void{
    }



}

