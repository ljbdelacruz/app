"use strict";
var Home_module_1 = require('./../../modules/Home/Home.module');
var AboutUs_module_1 = require('./../../modules/AboutUs/AboutUs.module');
var Login_module_1 = require('./../../modules/Login/Login.module');
var Games_module_1 = require('./../../modules/Games/Games.module');
var Tutorials_module_1 = require('./../../modules/Tutorials/Tutorials.module');
var community_module_1 = require('./../../modules/Community/community.module');
exports.Routes = [{ path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: Home_module_1.HomeModule },
    { path: 'aboutus', component: AboutUs_module_1.AboutUsModule },
    { path: 'login', component: Login_module_1.LoginModule },
    { path: 'games', component: Games_module_1.GamesModule },
    { path: 'tutorials', component: Tutorials_module_1.TutorialsModule },
    { path: 'community', component: community_module_1.CommunityModule }];
//# sourceMappingURL=Routings.properties.js.map