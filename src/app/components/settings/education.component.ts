import { Component, Input,ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, NgForm, FormArray } from '@angular/forms';



import {profileService} from '../../services/profile.service';
import {Auth} from '../../services/auth.service';

import {education} from '../../models/education.model';

//declare var swal: any;
@Component({
    moduleId: module.id,
    selector: 'education',
    templateUrl: 'education.component.html'
    ,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent {
    @Input() education:education[]
    public educationform: FormGroup;
   
   
    constructor(private formBuilder: FormBuilder,private auth:Auth,private profileservice:profileService)
    {
          this.educationform = this.formBuilder.group({
            schoolname: ['', Validators.required],
            degree: ['', Validators.required]
        });
    }
    onSubmit(educationform: NgForm)
    {
       
       this.profileservice.updateEducation(this.education)
        .then(response=>
                    //this.getData(response)
                console.log(response)
        );

     /*    swal(
                'Updated!',
                'Your Education has been updated.',
                'success'
            )*/

    }
    inserteducation(add:any)
    {
        this.profileservice.addEducation(this.education)
        .then(response=>
                    //this.getData(response)
                console.log(response)
        );
    }
    
    
}