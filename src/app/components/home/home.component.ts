import { Component } from '@angular/core';
import {Auth} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
 moduleId : module.id,   
 selector: 'home',
 templateUrl: `home.component.html`,
})
export class HomeComponent  {  
  constructor(private auth:Auth,private router: Router)
  {
     
  } 
  redirectRequest()
  {
   /* if(this.auth.authenticated())
    {
        this.router.navigateByUrl('/profile');
    }*/
  }

}