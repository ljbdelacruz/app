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
var PropertyGetter_method_1 = require('./../../services/methods/PropertyGetter.method');
var TutorialsComponent = (function () {
    function TutorialsComponent(propertyGetter) {
        this.propertyGetter = propertyGetter;
        this.tabsPSPTutorial = null;
        this.optionSelectedPSP = 1;
        this.tabsPSVTutorial = null;
        this.optionSelectedPSV = 1;
        this.tabsPSPTutorial = propertyGetter.GetTabsPSPTutorial();
        this.tabsPSVTutorial = propertyGetter.GetTabsPSVTutorial();
    }
    TutorialsComponent.prototype.onSelectOptionPSP = function (option) {
        this.optionSelectedPSP = option;
        alert("PSP Option " + this.optionSelectedPSP);
    };
    TutorialsComponent.prototype.onSelectOptionPSV = function (option) {
        this.optionSelectedPSV = option;
        alert("PSV Option " + this.optionSelectedPSV);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TutorialsComponent.prototype, "tutorialSelected", void 0);
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'tutorial-component',
            templateUrl: 'app/components/tutorials/tutorials.html'
        }), 
        __metadata('design:paramtypes', [PropertyGetter_method_1.PropertyGetter])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map