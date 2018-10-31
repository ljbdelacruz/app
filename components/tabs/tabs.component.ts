import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Tabs} from './../../objects/class.object';
@Component({
  selector: 'tabs-component',
  templateUrl:'app/components/tabs/tabs.html'
})
//this is the main class
export class TabsComponent {
    @Input() tabs:Tabs[];
    @Output() selectedTabs=new EventEmitter<number>();
    onSelectTabs(option:number):void{
      this.selectedTabs.emit(option);
    }
}
