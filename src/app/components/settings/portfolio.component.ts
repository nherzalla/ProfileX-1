import { Component, Input, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, NgForm, FormArray } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';






import { profileService } from '../../services/profile.service';
import { Auth } from '../../services/auth.service';
import { portfolio } from '../../models/portfolio.model';



//declare var swal: any;
@Component({
    moduleId: module.id,
    selector: 'portfolio',
    templateUrl: 'portfolio.component.html'
    ,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {
    @Input() portfolio: portfolio;
    public portfolioform: FormGroup;


    @ViewChild("fileUpload") fileupload: any;

    constructor(private formBuilder: FormBuilder, private auth: Auth, private profileservice: profileService) {
        this.portfolioform = this.formBuilder.group({
            portfolioURL: new FormControl(),//['', Validators.required],
            portfolioImageURL: new FormControl(),//['', Validators.required],
            portfolioSummary: new FormControl(),//['', Validators.required]
        });
    }

    inserteporfolio(add: any) {


        //   console.log(this.experience);
        /* this.profileservice.addPortfolio(this.portfolio)
              .then(response =>
                  //this.getData(response)
                  console.log(response)
              );*/
    }
    onSubmit(portfolioform: NgForm) {
        console.log(this.portfolio.portfolioSummary);

        let fi = this.fileupload.nativeElement;
        if (fi.files && fi.files[0]) {
            this.portfolio.fileToUpload = fi.files[0];
        }

        this.profileservice.addPortfolio(this.portfolio)
            .then(response =>
                //this.getData(response)
                console.log(response)
            );

    }

}