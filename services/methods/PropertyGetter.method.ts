import { Injectable } from '@angular/core';
import {NavigationItem} from './../../objects/NavigationItems';
import {NavItems} from './../properties/NavItems.properties';

//this method service is for getting data from service properties
@Injectable()
export class PropertyGetter {
  getNavItems(): NavigationItem[]{
      return NavItems;
  }
}