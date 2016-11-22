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
var PropertyGetter_method_1 = require('./../../services/methods/PropertyGetter.method');
var TutorialsModule = (function () {
    function TutorialsModule(route, propertyGetter) {
        this.propertyGetter = propertyGetter;
        this.selectedOption = 1;
        this.tabs = null;
        this.tabs = propertyGetter.getTabs();
    }
    TutorialsModule.prototype.ChangeOption = function (option) {
        this.selectedOption = option;
    };
    TutorialsModule = __decorate([
        core_1.Component({
            selector: 'tutorial-module',
            templateUrl: 'app/modules/Tutorials/Tutorials.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, PropertyGetter_method_1.PropertyGetter])
    ], TutorialsModule);
    return TutorialsModule;
}());
exports.TutorialsModule = TutorialsModule;
//# sourceMappingURL=Tutorials.module.js.map