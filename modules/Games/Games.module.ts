import { Component } from '@angular/core';
import {RouterModule,  Router, ActivatedRoute, Params} from '@angular/router';
import {Games} from './../../objects/Games.object';
import gameList = require('./../../services/data/GamesList.data');
import myGlobal = require('./../../services/properties/globals.properties');

@Component({
  selector: 'games-module',
  templateUrl:'app/modules/Games/Games.html'
})
export class GamesModule {
    private router:Router; 

    constructor(route : Router){
        this.router=route;
        this.CheckIsLogin();
    }
    games=[{cat:gameList.psv, option:1, title:'PS VITA GAMES'},
           {cat:gameList.t3dsGames, option:2, title:'3DS GAMES'},
           {cat:gameList.psp, option:3, title:'PSP GAMES'}];
    optionTabs=[{title:'PS VITA', option:1}, 
                {title:'3DS', option:2},
                {title:'PSP', option:3}];
    selectedOption=1;
    OnTabSelect(option):void{
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

