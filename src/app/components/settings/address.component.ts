import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {address} from '../../models/address.model';

@Component({
    moduleId: module.id,
    selector: 'address',
    templateUrl: 'address.component.html',
})
export class AddressComponent {
    @Input() addresses:address[]
    public adressForm: FormGroup;
}