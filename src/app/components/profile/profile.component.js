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
var ProfileComponent = (function () {
    function ProfileComponent(auth, profileservice) {
        var _this = this;
        this.auth = auth;
        this.profileservice = profileservice;
        this.profile = JSON.parse(localStorage.getItem('profile'));
        this.profileservice.verifyProfile().subscribe(function (data) { return _this.userprofile = data._body; });
        console.log(this.userprofile);
        /*  if(auth.authenticated())
            {
              console.log("Authnticated.....");
            }
            else
            {
              console.log("Not Authnticated.....");
            }*/
        // console.log(profileservice.getProfile());
        /* if(auth.authenticated())
         {
             console.log(localStorage.getItem('profile'));
         }  */
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile',
            templateUrl: "profile.component.html",
        }), 
        __metadata('design:paramtypes', [auth_service_1.Auth, profile_service_1.profileService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map