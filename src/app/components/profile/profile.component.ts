import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import {Auth} from '../../services/auth.service';
import {profileService} from '../../services/profile.service';
import {userprofile} from '../../models/userprofile.model';
import {address} from '../../models/address.model';
import {education} from '../../models/education.model';

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
    trustedImageUrl : SafeUrl;

    constructor(private auth:Auth,private profileservice:profileService, private sanitizer: DomSanitizer)
    {
        this.sanitizer = sanitizer;   
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

        this.profileservice.getProfileImage()
            .then(response=>
                  this.getImageData(response)
            );
            //testing image download

        
      
    } 
    getImageData(res:any)
    {

        let binary = new Uint8Array(res);
       
        let blob = new Blob([binary],{type: 'image/jpeg'});
        


      //  let myBlob: Blob = new Blob([res], {type: 'image/jpeg'}); // replace the type by whatever type is your response

        var fileURL = URL.createObjectURL(blob);
      //  console.log(fileURL);
     //this.userprofile.imageURL
      this.trustedImageUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);// instance.sanitization.bypassSecurityTrustStylefileURL;
      console.log(this.trustedImageUrl);

    // Cross your fingers at this point and pray whatever you're used to pray
  //  console.log(fileURL);
   
   // this.userprofile.imageURL = fileURL;
   // window.open(fileURL);

        /*console.log(res);
         this.userprofile = new userprofile();
         this.userprofile.imageURL = res;*/
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
            this.userprofile.address = res.address;
            this.userprofile.education = res.education;
            this.userprofile.experience = res.experience;

            
          //  this.userprofile1=  plainToClass(userprofile,res);
            console.log( this.userprofile);
        }
    }

    ngOnInit(){ 
        
    }
}
