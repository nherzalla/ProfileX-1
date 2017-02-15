import { Component } from '@angular/core';
import {Auth} from './services/auth.service';
import {profileService} from './services/profile.service';

@Component({
  moduleId : module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
})
export class AppComponent  {
  
  constructor(private auth:Auth,private profileservice:profileService)
  {

  }
}
