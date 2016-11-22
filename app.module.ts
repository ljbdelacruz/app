import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
//main component
import { AppComponent }   from './app.component';
//components
import {NavbarComponent} from './components/navbar/navbar.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginComponent} from './components/Login/Login.component';
import {GamesListComponent} from './components/GamesList/GamesList.component';
import {GameDescriptionComponent} from './components/GameDescription/GameDescription.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {FooterComponent} from './components/footer/footer.component';
import {TutorialsComponent} from './components/tutorials/tutorials.component'; 
//modules
import {HomeModule} from './modules/Home/Home.module';
import {AboutUsModule} from './modules/AboutUs/AboutUs.module';
import {LoginModule} from './modules/Login/Login.module';
import {GamesModule} from './modules/Games/Games.module';
import {TutorialsModule} from './modules/Tutorials/Tutorials.module';
//services
import {PropertyGetter} from './services/methods/PropertyGetter.method';
import {Routes} from './services/properties/Routings.properties';




//this is a boiler plate on where you will include all the components,services, modules
//and routings that will be used for the website
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Routes)
  ],
  declarations: [
    AppComponent,
    /*components*/
    NavbarComponent,
    RegistrationComponent,
    LoginComponent,
    GamesListComponent,
    GameDescriptionComponent,
    TabsComponent,
    FooterComponent,
    TutorialsComponent,
    /*Modules*/
    HomeModule,
    AboutUsModule,
    LoginModule,
    GamesModule,
    TutorialsModule
  ],
  providers: [
     PropertyGetter
  ],
  bootstrap: [ AppComponent ]
})


export class AppModule { 
}

