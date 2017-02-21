import { Component } from '@angular/core';
import {Auth} from '../../services/auth.service';
import {profileService} from '../../services/profile.service';

@Component({
 moduleId : module.id,   
 selector: 'profile',
 templateUrl: `profile.component.html`,
})
export class ProfileComponent  { 
    profile:any;
    constructor(private auth:Auth,private profileservice:profileService)
    {
        
        this.profile = JSON.parse(localStorage.getItem('profile'));
        
    if(auth.authenticated())
      {
        console.log("Authnticated.....");
      }
      else
      {
        console.log("Not Authnticated.....");
      }

       // console.log(profileservice.getProfile());
       /* if(auth.authenticated())
        {
            console.log(localStorage.getItem('profile'));
        }  */       
    }  
}
