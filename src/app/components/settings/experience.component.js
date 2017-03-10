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
var profile_service_1 = require('../../services/profile.service');
var auth_service_1 = require('../../services/auth.service');
//declare var swal: any;
var ExperienceComponent = (function () {
    function ExperienceComponent(formBuilder, auth, profileservice) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.profileservice = profileservice;
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'dd.mm.yyyy'
        };
        this.experienceform = this.formBuilder.group({
            companyname: ['', forms_1.Validators.required],
            jobtitle: ['', forms_1.Validators.required],
            jobdescription: ['', forms_1.Validators.required],
            startdate: new forms_1.FormControl(),
            enddate: new forms_1.FormControl(),
        });
    }
    ExperienceComponent.prototype.onSubmit = function (educationform) {
        this.profileservice.updateExperience(this.experience)
            .then(function (response) {
            //this.getData(response)
            return console.log(response);
        });
        /*   swal(
                 'Updated!',
                 'Your Education has been updated.',
                 'success'
             )*/
    };
    ExperienceComponent.prototype.insertexperience = function (add) {
        //   console.log(this.experience);
        this.profileservice.addExperience(this.experience)
            .then(function (response) {
            //this.getData(response)
            return console.log(response);
        });
    };
    ExperienceComponent.prototype.onDateChanged = function (event) {
        //   this.experience.startdate = event.formatted.toString();//new Date(event.formatted).toDateString();
        //  console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        if (event.formatted !== '') {
        }
        else {
        }
    };
    ExperienceComponent.prototype.onEndDateChanged = function (event) {
        // this.experience.enddate = event.formatted.toString();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ExperienceComponent.prototype, "experience", void 0);
    ExperienceComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'experience',
            templateUrl: 'experience.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.Auth, profile_service_1.profileService])
    ], ExperienceComponent);
    return ExperienceComponent;
}());
exports.ExperienceComponent = ExperienceComponent;
//# sourceMappingURL=experience.component.js.map