import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, NgForm, FormArray } from '@angular/forms';


import { Auth } from '../../services/auth.service';
import { profileService } from '../../services/profile.service';
import { userprofile } from '../../models/userprofile.model';
import {address} from "../../models/address.model";
import { AddressComponent } from '../settings/address.component';



import { plainToClass } from "class-transformer";
import { deserialize } from "class-transformer";
import { classToPlain } from "class-transformer";


@Component({
    moduleId: module.id,
    selector: 'settings',
    templateUrl: `settings.component.html`,
})
export class SettingsComponent {

    userprofile: userprofile = new userprofile();
    profileInfoform: FormGroup;
    addresses :  address[];

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
        }
    }

    saveprofileInfo(profileInfoform: NgForm) {//have to change it later.....
        console.log(this.userprofile);
        console.log(this.userprofile.address);
    }

    addAddress(event:any)
     {
       event.preventDefault();
       var emptyaddress = new address();
       this.addresses.push(emptyaddress);
       this.addresses.reverse();

    }

    deleteAddress(index:number,address:address)
    {
         this.profileservice.deleteAddress(address)
        .then(response=>
                    //this.getData(response)
                console.log(response)
        );
        this.addresses.splice(index,1);
    }



}