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
var auth_service_1 = require('../../services/auth.service');
var profile_service_1 = require('../../services/profile.service');
var SettingsComponent = (function () {
    /*  profile:any;
      userprofile: userprofile= new userprofile();
      //userprofile:userprofile[];
      userprofile1:userprofile= new userprofile();*/
    function SettingsComponent(auth, profileservice) {
        this.auth = auth;
        this.profileservice = profileservice;
    }
    SettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'settings',
            templateUrl: "settings.component.html",
        }), 
        __metadata('design:paramtypes', [auth_service_1.Auth, profile_service_1.profileService])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map