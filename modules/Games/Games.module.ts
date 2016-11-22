import { Component } from '@angular/core';
import {RouterModule,  Router, ActivatedRoute, Params} from '@angular/router';
import {Games, Consoles, Tabs} from './../../objects/class.object';
import {PropertyGetter} from './../../services/methods/PropertyGetter.method';
import myGlobal = require('./../../services/properties/globals.properties');

@Component({
  selector: 'games-module',
  templateUrl:'app/modules/Games/Games.html'
})
export class GamesModule {
    private router:Router; 
    games:Consoles[]=null;
    tabs:Tabs[]=null;
    selectedOption=1;
    
    constructor(route : Router, private propertyGetter: PropertyGetter){
        this.router=route;
        this.CheckIsLogin();
        this.games=propertyGetter.getConsoleGames();
        this.tabs=propertyGetter.getTabs();
    }
    OnTabSelect(option:number):void{
        this.selectedOption=option;
    }
    ShowGameDescription():void{
        this.selectedOption=4;
    }
    //this method checks the condition if it will allow the user to enter this module
    CheckIsLogin():void{
        if(!myGlobal.isLogin){
            this.router.navigateByUrl('/login');
            alert("Please Login First");
        }
    }
    game=myGlobal.selectedGame;
    //get ps vita datas from database
    //get 3ds data from database
    
}

