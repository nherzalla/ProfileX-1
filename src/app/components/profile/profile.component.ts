import { Component } from '@angular/core';
import {Auth} from '../../services/auth.service';
import {profileService} from '../../services/profile.service';
import {userprofile} from '../../models/userprofile.model';

import {plainToClass} from "class-transformer";
import {deserialize} from "class-transformer";
import {classToPlain} from "class-transformer";


@Component({
 moduleId : module.id,   
 selector: 'profile',
 templateUrl: `profile.component.html`,
})
export class ProfileComponent  { 
    profile:any;
    userprofile: userprofile= new userprofile();
    usrProfile:userprofile=new userprofile();

    test : any;
 

    constructor(private auth:Auth,private profileservice:profileService)
    {
        this.profile = JSON.parse(localStorage.getItem('profile'));
       
      /*  this.profileservice.verifyProfile()
                .map(res => res.json())
                .map(res => plainToClass(userprofile, res))
                .subscribe(user => 
                {
                    this.userprofile = user
                   //console.log(this.userprofile)
                })
            ;
            */

            this.profileservice.verifyProfilePromise()
            
            .then(response=>
                    this.getData(response)
                    /*response=>
                    this.usrProfile = plainToClass(response)
                    console.log(this.usrProfile)*/
                 
                );
        
       // this.userprofile.Email = "testbullshit";

        //let test = classToPlain(this.userprofile);
        //console.log(test);

    } 
    getData(res:any)
    {
        console.log(res);
        //with promise if more logic need to be done it has to be here like checking if the email is null call post new user info to the API...
         this.userprofile = plainToClass(userprofile,res);
         console.log(this.userprofile);
    }

    ngOnInit()
    {
       

    } 
}
