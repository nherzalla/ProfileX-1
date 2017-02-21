import { Component } from '@angular/core';
import {Auth} from '../../services/auth.service';
import {profileService} from '../../services/profile.service';
import {userprofile} from '../../models/userprofile.model';


@Component({
 moduleId : module.id,   
 selector: 'profile',
 templateUrl: `profile.component.html`,
})
export class ProfileComponent  { 
    profile:any;
    private userprofile:userprofile[];
    userz : any;

    constructor(private auth:Auth,private profileservice:profileService)
    {
        this.profile = JSON.parse(localStorage.getItem('profile'));

        this.profileservice.verifyProfile().subscribe
       // (data=>console.log(data._body));
       (data=>this.userprofile = data._body)

       console.log(this.userprofile);

                    
                
        
  /*  if(auth.authenticated())
      {
        console.log("Authnticated.....");
      }
      else
      {
        console.log("Not Authnticated.....");
      }*/

       // console.log(profileservice.getProfile());
       /* if(auth.authenticated())
        {
            console.log(localStorage.getItem('profile'));
        }  */       
    } 
    ngOnInit()
    {
       

    } 
}
