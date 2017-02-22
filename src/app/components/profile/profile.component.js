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
var userprofile_model_1 = require('../../models/userprofile.model');
var class_transformer_1 = require("class-transformer");
var ProfileComponent = (function () {
    function ProfileComponent(auth, profileservice) {
        var _this = this;
        this.auth = auth;
        this.profileservice = profileservice;
        this.userprofile = new userprofile_model_1.userprofile();
        this.profile = JSON.parse(localStorage.getItem('profile'));
        /*    this.profileservice.verifyProfile()
                     .map(res => res.json())
                     .map(res => plainToClass(userprofile, res))
                     .subscribe(user =>
                     {
                         this.userprofile = user
                        //console.log(this.userprofile)
                     })
                 ;
     */
        this.profileservice.verifyProfilePromise()
            .then(function (response) {
            return _this.getData(response);
        });
        // this.userprofile.Email = "testbullshit";
        //let test = classToPlain(this.userprofile);
        //console.log(test);
    }
    ProfileComponent.prototype.getData = function (res) {
        if (res.length == 0) {
            console.log("object is empty");
        }
        else {
            this.userprofile = class_transformer_1.plainToClass(userprofile_model_1.userprofile, res);
            console.log(this.userprofile);
        }
        // console.log(res);
        //with promise if more logic need to be done it has to be here like checking if the email is null call post new user info to the API...
        //  this.userprofile = plainToClass(userprofile,res);
        //    console.log(this.userprofile);
    };
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