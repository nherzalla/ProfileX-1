import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, NgForm, FormArray } from '@angular/forms';
 



import { profileService } from '../../services/profile.service';
import { Auth } from '../../services/auth.service';

import { experience } from '../../models/experience.model';

declare var swal: any;
@Component({
    moduleId: module.id,
    selector: 'experience',
    templateUrl: 'experience.component.html'
    ,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
    @Input() experience: experience[]
    public experienceform: FormGroup;


    constructor(private formBuilder: FormBuilder, private auth: Auth, private profileservice: profileService) 
    {
        this.experienceform = this.formBuilder.group({
            companyname: ['', Validators.required],
            jobtitle: ['', Validators.required],
            jobdescription: ['', Validators.required],
            startdate: new FormControl(),
            enddate: new FormControl(),
        });
    }
    onSubmit(educationform: NgForm) {

        this.profileservice.updateExperience(this.experience)
            .then(response =>
                //this.getData(response)
                console.log(response)
            );

        swal(
            'Updated!',
            'Your Education has been updated.',
            'success'
        )

    }
    insertexperience(add: any) {
        this.profileservice.addExperience(this.experience)
            .then(response =>
                //this.getData(response)
                console.log(response)
            );
    }


}