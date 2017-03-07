import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, NgForm, FormArray } from '@angular/forms';
import {IMyOptions} from 'mydatepicker';
import { IMyDateModel, IMyInputFieldChanged, IMyCalendarViewChanged} from    'mydatepicker/';

 



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

    private myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy'
    };

    



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
    
  //   console.log(this.experience);
       this.profileservice.addExperience(this.experience)
            .then(response =>
                //this.getData(response)
                console.log(response)
            );
    }
     onDateChanged(event: IMyDateModel) {
       
       this.experience.startdate = event.formatted.toString();//new Date(event.formatted).toDateString();
      //  console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        if(event.formatted !== '') {
         //   this.selectedTextNormal = 'Formatted: ' + event.formatted + ' - epoc timestamp: ' + event.epoc;
          //  this.border = '1px solid #CCC';

            //this.selectedDateNormal = event.formatted;
        }
        else {
            //this.selectedTextNormal = '';
            //this.border = 'none';
        }
    }
    onEndDateChanged(event:IMyDateModel)
    {
        this.experience.enddate = event.formatted.toString();
    }


}