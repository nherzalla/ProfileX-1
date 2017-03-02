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
        console.log(this.address);

      /* this.profileservice.updateAddress(this.address)
        .then(response=>
                    //this.getData(response)
                console.log(response)
        );*/

    }
    deleteAddress(index:number)
    {
        event.preventDefault();
        console.log(this.address);
       //this.address.splice(0,1);
    }
     /*   addAddress() {
       console.log(this.addressform);

       // const control = this.addressform;
        //control.push(this.initAddress());
    }*/
  /*   initAddress() {
        // initialize our address
        return this.formBuilder.group({
          address1: ['', Validators.required],
            address2: new FormControl(),
            city: ['', Validators.required],
            state: new FormControl(),
            country: ['', Validators.required],

        });
    }*/

}