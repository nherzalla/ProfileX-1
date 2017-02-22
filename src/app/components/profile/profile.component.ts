import { Component } from '@angular/core';
import {Auth} from '../../services/auth.service';
import {profileService} from '../../services/profile.service';
import {userprofile} from '../../models/userprofile.model';

import {plainToClass} from 'class-transformer';


@Component({
 moduleId : module.id,   
 selector: 'profile',
 templateUrl: `profile.component.html`,
})
export class ProfileComponent  { 
    profile:any;
    userprofile: userprofile= new userprofile();
    userz : any;

    constructor(private auth:Auth,private profileservice:profileService)
    {
        this.profile = JSON.parse(localStorage.getItem('profile'));
       
        this.profileservice.verifyProfile()
                .map(res => res.json())
                .map(res => plainToClass(userprofile, res))
                .subscribe(user => {
                    this.userprofile = user
                    console.log(this.userprofile)
            });

            console.log(this.userprofile);

    } 

    ngOnInit()
    {
       

    } 
}
