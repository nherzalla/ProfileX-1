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
var PortfolioComponent = (function () {
    function PortfolioComponent(formBuilder, auth, profileservice) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.profileservice = profileservice;
        this.portfolioform = this.formBuilder.group({
            portfolioURL: ['', forms_1.Validators.required],
            portfolioImageURL: ['', forms_1.Validators.required],
            portfolioSummary: ['', forms_1.Validators.required]
        });
    }
    PortfolioComponent.prototype.insertexperience = function (add) {
        //   console.log(this.experience);
        this.profileservice.addPortfolio(this.portfolio)
            .then(function (response) {
            //this.getData(response)
            return console.log(response);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PortfolioComponent.prototype, "portfolio", void 0);
    PortfolioComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'portfolio',
            templateUrl: 'portfolio.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.Auth, profile_service_1.profileService])
    ], PortfolioComponent);
    return PortfolioComponent;
}());
exports.PortfolioComponent = PortfolioComponent;
//# sourceMappingURL=portfolio.component.js.map