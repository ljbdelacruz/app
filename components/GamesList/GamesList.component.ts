import { Component, Input,  Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Games} from './../../objects/class.object';
import myGlobal = require('./../../services/properties/globals.properties');


@Component({
  selector: 'gameslist-component',
  templateUrl:'app/components/GamesList/GamesList.html'
})
//this is the main class
export class GamesListComponent {
    @Input() games : Games[];
    @Output() event = new EventEmitter();
    OnSelectGame(game : Games):void{
        myGlobal.selectedGame=game;
        this.event.emit();
    }
    Refresh():void{
        alert("Shitty");
    }
    

}
