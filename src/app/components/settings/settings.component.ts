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
    /*  profile:any;
      userprofile: userprofile= new userprofile();
      //userprofile:userprofile[];
      userprofile1:userprofile= new userprofile();*/
    // userprofile:userprofile[];
    userprofile: userprofile = new userprofile();
    profileInfoform: FormGroup;
    addresses :  address[];

    constructor(private auth: Auth, private profileservice: profileService, private formBuilder: FormBuilder) {
        this.profileInfoform = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required]

            //  lastName : new FormControl()
            // email: ['', Validators.required],
            //password: ['', Validators.required],
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
            // this.userprofile1 = new userprofile();
            //  this.userprofile.Email = res.Email;
            this.userprofile.firstName = res.firstName;
            this.userprofile.lastName = res.lastName;
            this.addresses = res.address;

            //  this.userprofile1=  plainToClass(userprofile,res);
            console.log(this.userprofile);
        }
    }

    saveprofileInfo(profileInfoform: NgForm) {
        console.log(this.userprofile);
        console.log(this.userprofile.address);
    }



  /*  initAddress() {
        // initialize our address
        return this.formBuilder.group({
            address1: ['', Validators.required]

        });
    }
*/
    addAddress(event:any)
     {
       event.preventDefault();
       var emptyaddress = new address();
       this.addresses.push(emptyaddress);
       this.addresses.reverse();
       
      // this.profileInfoform.controls

   //     const control = <FormArray>this.profileInfoform.controls['addresses'];
     //   control.push(this.initAddress());
    }

/*    removeAddress(i: number) {
        // remove address from the list
        const control = <FormArray>this.profileInfoform.controls['addresses'];
        control.removeAt(i);
    }*/

}