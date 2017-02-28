import { Component, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, NgForm, FormArray } from '@angular/forms';

import {address} from '../../models/address.model';

@Component({
    moduleId: module.id,
    selector: 'address',
    templateUrl: 'address.component.html',
})
export class AddressComponent {
    @Input() address:address[]
    public addressform: FormGroup;
   
   
    constructor(private formBuilder: FormBuilder)
    {
          this.addressform = this.formBuilder.group({
            address1: ['', Validators.required]
        });
    }
}