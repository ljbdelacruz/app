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
var myGlobal = require('./../../services/properties/globals.properties');
var GamesListComponent = (function () {
    function GamesListComponent() {
        this.event = new core_1.EventEmitter();
    }
    GamesListComponent.prototype.OnSelectGame = function (game) {
        myGlobal.selectedGame = game;
        this.event.emit();
    };
    GamesListComponent.prototype.Refresh = function () {
        alert("Shitty");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], GamesListComponent.prototype, "games", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GamesListComponent.prototype, "event", void 0);
    GamesListComponent = __decorate([
        core_1.Component({
            selector: 'gameslist-component',
            templateUrl: 'app/components/GamesList/GamesList.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GamesListComponent);
    return GamesListComponent;
}());
exports.GamesListComponent = GamesListComponent;
//# sourceMappingURL=GamesList.component.js.map