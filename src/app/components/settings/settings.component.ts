import { Component } from '@angular/core';
import {Auth} from '../../services/auth.service';
import {profileService} from '../../services/profile.service';
import {userprofile} from '../../models/userprofile.model';

import {plainToClass} from "class-transformer";
import {deserialize} from "class-transformer";
import {classToPlain} from "class-transformer";


@Component({
 moduleId : module.id,   
 selector: 'settings',
 templateUrl: `settings.component.html`,
})
export class SettingsComponent  { 
  /*  profile:any;
    userprofile: userprofile= new userprofile();
    //userprofile:userprofile[];
    userprofile1:userprofile= new userprofile();*/
  // userprofile:userprofile[];
  userprofile: userprofile= new userprofile();

    constructor(private auth:Auth,private profileservice:profileService)
    {
           this.profileservice.verifyProfilePromise()
            .then(response=>
                    this.getData(response)
            );

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
          //  this.userprofile.Email = res.Email;
            this.userprofile.firstName = res.firstName;
            this.userprofile.lastName = res.lastName;

          //  this.userprofile1=  plainToClass(userprofile,res);
            console.log( this.userprofile);
        }
    }

}