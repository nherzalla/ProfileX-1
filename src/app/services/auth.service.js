// app/auth.service.ts
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
var angular2_jwt_1 = require('angular2-jwt');
var router_1 = require('@angular/router');
var Auth = (function () {
    function Auth(router) {
        var _this = this;
        this.router = router;
        // Configure Auth0
        this.lock = new Auth0Lock('hDIOjnQhv5O1SW3xdwLQ3O102oDRydKZ', 'myfaceprofile.auth0.com', { auth: {
                params: { scope: 'openid email user_metadata app_metadata picture' }
            },
            allowForgotPassword: true,
            additionalSignUpFields: [
                {
                    name: "firstname",
                    placeholder: "Enter your first name"
                },
                {
                    name: "lastname",
                    placeholder: "Enter your last name"
                }
            ]
        });
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", function (authResult) {
            _this.lock.getUserInfo(authResult.accessToken, function (error, profile) {
                if (error) {
                    throw new Error(error);
                }
                //  console.log(profile);
                //  console.log(authResult.idToken);
                localStorage.setItem('id_token', authResult.idToken);
                localStorage.setItem('profile', JSON.stringify(profile));
            });
        });
    }
    Auth.prototype.login = function () {
        var _this = this;
        this.lock.show(function (error, profile, id_token) {
            if (error) {
                console.log(error);
            }
            // We get a profile object for the user from Auth0
            localStorage.setItem('profile', JSON.stringify(profile));
            // We also get the user's JWT
            localStorage.setItem('id_token', id_token);
            _this.router.navigateByUrl('/profile');
        });
    };
    Auth.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return angular2_jwt_1.tokenNotExpired();
    };
    Auth.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
    };
    Auth = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Auth);
    return Auth;
}());
exports.Auth = Auth;
//# sourceMappingURL=auth.service.js.map