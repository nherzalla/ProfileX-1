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
    //userprofile:userprofile[];
    userprofile1:userprofile= new userprofile();

   settings:boolean;
  initialized: any = false;

    constructor(private auth:Auth,private profileservice:profileService)
    {
        this.settings = false;
        this.profile = JSON.parse(localStorage.getItem('profile'));
   /*    this.profileservice.verifyProfile()
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
            );
        
      
    } 
    showSettings()
    {
        this.settings = true;
    }
    getData(res:any)
    {
        if(res.length== 0)
        {
            console.log("object is empty");    
        }
        else
        {
            this.userprofile = new userprofile();
           // this.userprofile1 = new userprofile();
            this.userprofile.Email = res.Email;
            this.userprofile.firstName = res.firstName;
            this.userprofile.lastName = res.lastName;

          //  this.userprofile1=  plainToClass(userprofile,res);
            console.log( this.userprofile);
        }
    }

    ngOnInit(){ 
        
        this.initialized=true; 

        
    }
}
