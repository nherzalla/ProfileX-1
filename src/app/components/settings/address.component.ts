import { Component, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, NgForm, FormArray } from '@angular/forms';


import {profileService} from '../../services/profile.service';
import {Auth} from '../../services/auth.service';

import {address} from '../../models/address.model';

@Component({
    moduleId: module.id,
    selector: 'address',
    templateUrl: 'address.component.html',
})
export class AddressComponent {
    @Input() address:address[]
    public addressform: FormGroup;
   
   
    constructor(private formBuilder: FormBuilder,private auth:Auth,private profileservice:profileService)
    {
          this.addressform = this.formBuilder.group({
            address1: ['', Validators.required],
            address2: new FormControl(),
            city: ['', Validators.required],
            state: new FormControl(),
            country: ['', Validators.required],

        });
    }
    onSubmit(addressform: NgForm)
    {
       this.profileservice.updateAddress(this.address)
        .then(response=>
                    //this.getData(response)
                console.log(response)
        );

    }
}