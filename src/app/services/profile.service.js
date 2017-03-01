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
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/toPromise');
var profileService = (function () {
    function profileService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.profileUrl = "http://localhost:54490/api/Profile";
    }
    profileService.prototype.getProfile = function () {
        return this.authHttp
            .get(this.profileUrl)
            .toPromise()
            .then(function (response) { return response.text; })
            .catch(this.handleError);
    };
    profileService.prototype.updateAddress = function (address) {
        return this.authHttp
            .post(this.profileUrl + "/updateaddress", address)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    profileService.prototype.verifyProfilePromise = function () {
        return this.authHttp
            .get(this.profileUrl + "/profileverify")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    profileService.prototype.verifyProfile = function () {
        return this.authHttp
            .get(this.profileUrl + "/profileverify")
            .map(this.extractData)
            .catch(this.handleError);
        // .subscribe(data=> console.log('success',data),
        // err=> console.log('error', err)
        //)
    };
    //Private methods.......................................................................
    profileService.prototype.extractDataPromise = function (res) {
        var body = res.json();
        return body || [];
    };
    profileService.prototype.extractData = function (res) {
        return res || {};
    };
    // private handleError(error: any): Promise<any> 
    profileService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    profileService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
    ], profileService);
    return profileService;
}());
exports.profileService = profileService;
//# sourceMappingURL=profile.service.js.map