import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'tabs-component',
  templateUrl:'app/components/tabs/tabs.html'
})
//this is the main class 
export class TabsComponent {
    @Input() tabs:string[];
}
