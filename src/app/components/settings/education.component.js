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
var EducationComponent = (function () {
    function EducationComponent(formBuilder, auth, profileservice) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.profileservice = profileservice;
        this.educationform = this.formBuilder.group({
            schoolname: ['', forms_1.Validators.required],
            degree: ['', forms_1.Validators.required]
        });
    }
    EducationComponent.prototype.onSubmit = function (educationform) {
        this.profileservice.updateEducation(this.education)
            .then(function (response) {
            //this.getData(response)
            return console.log(response);
        });
        swal('Updated!', 'Your Education has been updated.', 'success');
    };
    EducationComponent.prototype.inserteducation = function (add) {
        this.profileservice.addEducation(this.education)
            .then(function (response) {
            //this.getData(response)
            return console.log(response);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], EducationComponent.prototype, "education", void 0);
    EducationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'education',
            templateUrl: 'education.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.Auth, profile_service_1.profileService])
    ], EducationComponent);
    return EducationComponent;
}());
exports.EducationComponent = EducationComponent;
//# sourceMappingURL=education.component.js.map