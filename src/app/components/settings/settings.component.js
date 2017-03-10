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
var address_model_1 = require("../../models/address.model");
var education_model_1 = require('../../models/education.model');
var experience_model_1 = require('../../models/experience.model');
///declare var swal: any;
var SettingsComponent = (function () {
    function SettingsComponent(auth, profileservice, formBuilder) {
        var _this = this;
        this.auth = auth;
        this.profileservice = profileservice;
        this.formBuilder = formBuilder;
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
            this.userprofile.firstName = res.firstName;
            this.userprofile.lastName = res.lastName;
            this.addresses = res.address;
            this.educations = res.education;
            this.experiences = res.experience;
        }
    };
    SettingsComponent.prototype.saveprofileInfo = function (profileInfoform) {
        /* let fi = this.fileInput.nativeElement;
           var fileToUpload = null;
           if (fi.files && fi.files[0])
           {
               fileToUpload = fi.files[0];
           }
           this.profileservice.updateProfile(this.userprofile.firstName,this.userprofile.lastName, fileToUpload)
                   .then(response =>
                       //this.getData(response)
                       console.log(response)
                   );*/
    };
    SettingsComponent.prototype.addAddress = function (event) {
        event.preventDefault();
        var emptyaddress = new address_model_1.address();
        this.addresses.push(emptyaddress);
        this.addresses.reverse();
    };
    SettingsComponent.prototype.addEducation = function (event) {
        event.preventDefault();
        var emptyeducation = new education_model_1.education();
        this.educations.push(emptyeducation);
        this.educations.reverse();
    };
    SettingsComponent.prototype.addExperience = function (event) {
        event.preventDefault();
        var emptyexperience = new experience_model_1.experience();
        this.experiences.push(emptyexperience);
        this.experiences.reverse();
    };
    SettingsComponent.prototype.deleteAddress = function (event, index, address) {
        event.preventDefault();
        /*  swal(
              'Deleted!',
              'Your address has been deleted.',
              'warning'
          )*/
        if (address.UniqId != null) {
            this.profileservice.deleteAddress(address)
                .then(function (response) {
                //this.getData(response)
                return console.log(response);
            });
        }
        this.addresses.splice(index, 1);
    };
    SettingsComponent.prototype.deleteEducation = function (event, index, education) {
        event.preventDefault();
        /*   swal(
               'Deleted!',
               'Your education has been deleted.',
               'warning'
           )*/
        if (education.UniqId != null) {
            this.profileservice.deleteEducation(education)
                .then(function (response) {
                //this.getData(response)
                return console.log(response);
            });
        }
        this.educations.splice(index, 1);
    };
    SettingsComponent.prototype.deleteExperience = function (event, index, experience) {
        event.preventDefault();
        /*    swal(
                'Deleted!',
                'Your education has been deleted.',
                'warning'
            )*/
        if (experience.UniqId != null) {
            this.profileservice.deleteExperience(experience)
                .then(function (response) {
                //this.getData(response)
                return console.log(response);
            });
        }
        this.experiences.splice(index, 1);
    };
    __decorate([
        core_1.ViewChild("fileInput"), 
        __metadata('design:type', Object)
    ], SettingsComponent.prototype, "fileInput", void 0);
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