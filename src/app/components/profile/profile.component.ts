import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { Auth } from '../../services/auth.service';
import { profileService } from '../../services/profile.service';
import { userprofile } from '../../models/userprofile.model';
import { address } from '../../models/address.model';
import { education } from '../../models/education.model';

import { plainToClass } from "class-transformer";
import { deserialize } from "class-transformer";
import { classToPlain } from "class-transformer";


@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: `profile.component.html`,
})
export class ProfileComponent {
    profile: any;

    userprofile: userprofile = new userprofile();
    //userprofile:userprofile[];
    userprofile1: userprofile = new userprofile();
    trustedImageUrl: SafeUrl;
    src: any;

    constructor(private auth: Auth, private profileservice: profileService, private sanitizer: DomSanitizer) {
        this.sanitizer = sanitizer;
        this.profile = JSON.parse(localStorage.getItem('profile'));

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
            // this.userprofile1 = new userprofile();
            //  this.userprofile.Email = res.Email;
            this.userprofile.firstName = res.firstName;
            this.userprofile.lastName = res.lastName;
            this.userprofile.address = res.address;
            this.userprofile.education = res.education;
            this.userprofile.experience = res.experience;
            this.userprofile.profileImageURL = res.profileImageURL;


            //  this.userprofile1=  plainToClass(userprofile,res);
            console.log(this.userprofile);
        }
    }

    ngOnInit() {

    }
}