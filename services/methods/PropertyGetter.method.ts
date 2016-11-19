import { Injectable } from '@angular/core';
import {NavigationItem, Tabs, Games, Consoles} from './../../objects/class.object';
import {navItems, tabsTutorial, platform, psv, psp, t3dsGames} from './../../services/data/datas.data';


//this method service is for getting data from service properties
@Injectable()
export class PropertyGetter {
  getNavItems(): NavigationItem[]{
      return navItems;
  }
  getTabs():Tabs[]{
    return tabsTutorial;
  }
  //game datas
  getPSVGames():Games[]{
    return psv;
  }
  getPSPGames():Games[]{
    return psp;
  }  
  get3DSGames():Games[]{
    return t3dsGames;
  }
  getConsoleGames():Consoles[]{
    return platform;
  }

}