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
var AddressComponent = (function () {
    function AddressComponent(formBuilder, auth, profileservice) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.profileservice = profileservice;
        this.addressform = this.formBuilder.group({
            address1: ['', forms_1.Validators.required],
            address2: new forms_1.FormControl(),
            city: ['', forms_1.Validators.required],
            state: new forms_1.FormControl(),
            country: ['', forms_1.Validators.required],
        });
    }
    AddressComponent.prototype.onSubmit = function (addressform) {
        this.profileservice.updateAddress(this.address)
            .then(function (response) {
            //this.getData(response)
            return console.log(response);
        });
    };
    AddressComponent.prototype.insertaddress = function (add) {
        this.profileservice.addAddress(this.address)
            .then(function (response) {
            //this.getData(response)
            return console.log(response);
        });
    };
    AddressComponent.prototype.deleteAddress = function (index) {
        event.preventDefault();
        delete this.address;
        //£
        //   this.address = new address[];
        //const control = this.addressform.removeControl()
        //control.removeAt(0);
        //this.address.splice(0,1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AddressComponent.prototype, "address", void 0);
    AddressComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'address',
            templateUrl: 'address.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.Auth, profile_service_1.profileService])
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;
//# sourceMappingURL=address.component.js.map