import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Games} from './../../objects/class.object';
import myGlobal = require('./../../services/properties/globals.properties');


@Component({
  selector: 'gamedescription-component',
  templateUrl:'app/components/GameDescription/GameDescription.html'
})
//this is the main class
export class GameDescriptionComponent {
    @Input() game : Games;
    games=myGlobal.selectedGame;
    OpenLink(link):void{
      window.open(link);
    }
}
