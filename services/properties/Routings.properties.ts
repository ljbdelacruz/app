
import {HomeModule} from './../../modules/Home/Home.module';
import {AboutUsModule} from './../../modules/AboutUs/AboutUs.module';
import {LoginModule} from './../../modules/Login/Login.module';
import {GamesModule} from './../../modules/Games/Games.module';

export const Routes=[{path: '', redirectTo: '/login',pathMatch: 'full'},
                     {path:'home', component:HomeModule},
                     {path:'aboutus', component:AboutUsModule},
                     {path:'login', component:LoginModule},
                     {path:'games', component:GamesModule}];