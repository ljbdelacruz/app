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
var class_object_1 = require('./../../objects/class.object');
var ContentDisplayComponent = (function () {
    function ContentDisplayComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ContentDisplayComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ContentDisplayComponent.prototype, "content", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', class_object_1.Thumbnail)
    ], ContentDisplayComponent.prototype, "mainImage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', class_object_1.Thumbnail)
    ], ContentDisplayComponent.prototype, "images", void 0);
    ContentDisplayComponent = __decorate([
        core_1.Component({
            selector: 'content-display-component',
            templateUrl: 'app/components/ContentDisplay/ContentDisplay.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ContentDisplayComponent);
    return ContentDisplayComponent;
}());
exports.ContentDisplayComponent = ContentDisplayComponent;
//# sourceMappingURL=ContentDisplay.js.map