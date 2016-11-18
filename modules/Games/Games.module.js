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
var router_1 = require('@angular/router');
var gameList = require('./../../services/data/GamesList.data');
var myGlobal = require('./../../services/properties/globals.properties');
var GamesModule = (function () {
    function GamesModule(route) {
        this.games = [{ cat: gameList.psv, option: 1, title: 'PS VITA GAMES' },
            { cat: gameList.t3dsGames, option: 2, title: '3DS GAMES' },
            { cat: gameList.psp, option: 3, title: 'PSP GAMES' }];
        this.optionTabs = [{ title: 'PS VITA', option: 1 },
            { title: '3DS', option: 2 },
            { title: 'PSP', option: 3 }];
        this.selectedOption = 1;
        this.game = myGlobal.selectedGame;
        this.router = route;
        this.CheckIsLogin();
    }
    GamesModule.prototype.OnTabSelect = function (option) {
        this.selectedOption = option;
    };
    GamesModule.prototype.ShowGameDescription = function () {
        this.selectedOption = 4;
    };
    //this method checks the condition if it will allow the user to enter this module
    GamesModule.prototype.CheckIsLogin = function () {
        if (!myGlobal.isLogin) {
            this.router.navigateByUrl('/login');
            alert("Please Login First");
        }
    };
    GamesModule = __decorate([
        core_1.Component({
            selector: 'games-module',
            templateUrl: 'app/modules/Games/Games.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], GamesModule);
    return GamesModule;
}());
exports.GamesModule = GamesModule;
//# sourceMappingURL=Games.module.js.map