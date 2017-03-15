import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, NgForm, FormArray } from '@angular/forms';
 



import { profileService } from '../../services/profile.service';
import { Auth } from '../../services/auth.service';
import {portfolio} from '../../models/portfolio.model';


//declare var swal: any;
@Component({
    moduleId: module.id,
    selector: 'portfolio',
    templateUrl: 'portfolio.component.html'
    ,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {
    @Input() portfolio: portfolio[]
    public portfolioform: FormGroup;

  
    



    constructor(private formBuilder: FormBuilder, private auth: Auth, private profileservice: profileService) 
    {
        this.portfolioform = this.formBuilder.group({
            portfolioURL: ['', Validators.required],
            portfolioImageURL: ['', Validators.required],
            portfolioSummary: ['', Validators.required]
        });
    }
   
    insertexperience(add: any) {
    
  //   console.log(this.experience);
       this.profileservice.addPortfolio(this.portfolio)
            .then(response =>
                //this.getData(response)
                console.log(response)
            );
    }
    
   


}