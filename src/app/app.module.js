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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var mydatepicker_1 = require('mydatepicker');
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./app.component');
var angular2_jwt_1 = require('angular2-jwt');
var auth_service_1 = require('./services/auth.service');
var auth_guard_1 = require('./auth.guard');
var profile_service_1 = require('./services/profile.service');
var home_component_1 = require('./components/home/home.component');
var profile_component_1 = require('./components/profile/profile.component');
var settings_component_1 = require('./components/settings/settings.component');
var address_component_1 = require('./components/settings/address.component');
var education_component_1 = require('./components/settings/education.component');
var experience_component_1 = require('./components/settings/experience.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing, http_1.HttpModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, mydatepicker_1.MyDatePickerModule],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, profile_component_1.ProfileComponent, settings_component_1.SettingsComponent, address_component_1.AddressComponent, education_component_1.EducationComponent, experience_component_1.ExperienceComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                app_routing_1.appRoutingProviders,
                angular2_jwt_1.AUTH_PROVIDERS,
                auth_service_1.Auth,
                auth_guard_1.AuthGuard,
                http_1.HttpModule,
                profile_service_1.profileService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map