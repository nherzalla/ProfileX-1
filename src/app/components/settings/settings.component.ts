import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, NgForm, FormArray } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



import { Auth } from '../../services/auth.service';
import { profileService } from '../../services/profile.service';
import { userprofile } from '../../models/userprofile.model';
import { address } from "../../models/address.model";
import { education } from '../../models/education.model';
import { AddressComponent } from '../settings/address.component';
import { EducationComponent } from '../settings/education.component';



import { plainToClass } from "class-transformer";
import { deserialize } from "class-transformer";
import { classToPlain } from "class-transformer";

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'settings',
    templateUrl: `settings.component.html`,
})
export class SettingsComponent {

    userprofile: userprofile = new userprofile();
    profileInfoform: FormGroup;
    addresses: address[];
    educations: education[];

    constructor(private auth: Auth, private profileservice: profileService, private formBuilder: FormBuilder) {
        this.profileInfoform = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required]

        });

        this.profileservice.verifyProfilePromise()
            .then(response =>
                this.getData(response)
            );

    }
    getData(res: any) {
        if (res.length == 0) {
            console.log("object is empty");
        }
        else {
            this.userprofile = new userprofile();
            this.userprofile.firstName = res.firstName;
            this.userprofile.lastName = res.lastName;
            this.addresses = res.address;
            this.educations = res.education;
        }
    }

    saveprofileInfo(profileInfoform: NgForm) {//have to change it later.....
        console.log(this.userprofile);
        console.log(this.userprofile.address);
    }

    addAddress(event: any) {
        event.preventDefault();
        var emptyaddress = new address();
        this.addresses.push(emptyaddress);
        this.addresses.reverse();

    }
    addEducation(event: any) {
        event.preventDefault();
        var emptyeducation = new education();
        this.educations.push(emptyeducation);
        this.educations.reverse();
    }

    deleteAddress(event: any, index: number, address: address) {
        event.preventDefault();

        swal(
            'Deleted!',
            'Your address has been deleted.',
            'warning'
        )

        if (address.UniqId != null) {
            this.profileservice.deleteAddress(address)
                .then(response =>
                    //this.getData(response)
                    console.log(response)
                );
        }

        this.addresses.splice(index, 1);
    }

    deleteEducation(event: any, index: number, education: education) {
        event.preventDefault();

        swal(
            'Deleted!',
            'Your education has been deleted.',
            'warning'
        )
        if (education.UniqId != null) {
            this.profileservice.deleteEducation(education)
                .then(response =>
                    //this.getData(response)
                    console.log(response)
                );

        }
        this.educations.splice(index, 1);
    }




}