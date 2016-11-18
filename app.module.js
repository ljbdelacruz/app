"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
//main component
var app_component_1 = require('./app.component');
//components
var navbar_component_1 = require('./components/navbar/navbar.component');
var registration_component_1 = require('./components/registration/registration.component');
var Login_component_1 = require('./components/Login/Login.component');
var GamesList_component_1 = require('./components/GamesList/GamesList.component');
var GameDescription_component_1 = require('./components/GameDescription/GameDescription.component');
var tabs_component_1 = require('./components/tabs/tabs.component');
//modules
var Home_module_1 = require('./modules/Home/Home.module');
var AboutUs_module_1 = require('./modules/AboutUs/AboutUs.module');
var Login_module_1 = require('./modules/Login/Login.module');
var Games_module_1 = require('./modules/Games/Games.module');
var Tutorials_module_1 = require('./modules/Tutorials/Tutorials.module');
//services
var PropertyGetter_method_1 = require('./services/methods/PropertyGetter.method');
var Routings_properties_1 = require('./services/properties/Routings.properties');
//this is a boiler plate on where you will include all the components,services, modules
//and routings that will be used for the website
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(Routings_properties_1.Routes)
            ],
            declarations: [
                app_component_1.AppComponent,
                /*components*/
                navbar_component_1.NavbarComponent,
                registration_component_1.RegistrationComponent,
                Login_component_1.LoginComponent,
                GamesList_component_1.GamesListComponent,
                GameDescription_component_1.GameDescriptionComponent,
                tabs_component_1.TabsComponent,
                /*Modules*/
                Home_module_1.HomeModule,
                AboutUs_module_1.AboutUsModule,
                Login_module_1.LoginModule,
                Games_module_1.GamesModule,
                Tutorials_module_1.TutorialsModule
            ],
            providers: [
                PropertyGetter_method_1.PropertyGetter
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map