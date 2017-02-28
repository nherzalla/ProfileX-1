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
var forms_1 = require('@angular/forms');
var auth_service_1 = require('../../services/auth.service');
var profile_service_1 = require('../../services/profile.service');
var userprofile_model_1 = require('../../models/userprofile.model');
var SettingsComponent = (function () {
    function SettingsComponent(auth, profileservice, formBuilder) {
        var _this = this;
        this.auth = auth;
        this.profileservice = profileservice;
        this.formBuilder = formBuilder;
        /*  profile:any;
          userprofile: userprofile= new userprofile();
          //userprofile:userprofile[];
          userprofile1:userprofile= new userprofile();*/
        // userprofile:userprofile[];
        this.userprofile = new userprofile_model_1.userprofile();
        this.profileInfoform = this.formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required]
        });
        this.profileservice.verifyProfilePromise()
            .then(function (response) {
            return _this.getData(response);
        });
    }
    SettingsComponent.prototype.getData = function (res) {
        if (res.length == 0) {
            console.log("object is empty");
        }
        else {
            this.userprofile = new userprofile_model_1.userprofile();
            // this.userprofile1 = new userprofile();
            //  this.userprofile.Email = res.Email;
            this.userprofile.firstName = res.firstName;
            this.userprofile.lastName = res.lastName;
            this.userprofile.address = res.address;
            //  this.userprofile1=  plainToClass(userprofile,res);
            console.log(this.userprofile);
        }
    };
    SettingsComponent.prototype.saveprofileInfo = function (profileInfoform) {
        console.log(this.userprofile);
        console.log(this.userprofile.address);
    };
    SettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'settings',
            templateUrl: "settings.component.html",
        }), 
        __metadata('design:paramtypes', [auth_service_1.Auth, profile_service_1.profileService, forms_1.FormBuilder])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map