// app/auth.service.ts

import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  
  lock = new Auth0Lock('hDIOjnQhv5O1SW3xdwLQ3O102oDRydKZ', 'myfaceprofile.auth0.com', 
  { auth: 
    {
      params: {scope: 'openid email user_metadata app_metadata picture'},
    },
     allowForgotPassword: true,
    
     additionalSignUpFields: [
        {
            name: "firstname",
            placeholder:"Enter your first name"
        },
        {
          name: "lastname",
          placeholder : "Enter your last name"
        }
      ]
});

  constructor() 
  {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult:any) => 
    {
      this.lock.getUserInfo(authResult.accessToken, function(error:any,profile:any)
      {
          if(error)
          {
            throw new Error(error);
          }
        //  console.log(profile);
        //  console.log(authResult.idToken);
          localStorage.setItem('id_token', authResult.idToken);
          localStorage.setItem('profile', JSON.stringify(profile));
      });
      
    });
  }

  public login() {

    this.lock.show((error: string, profile: Object, id_token: string) => {
      if (error) {
        console.log(error);
      }
      // We get a profile object for the user from Auth0
      localStorage.setItem('profile', JSON.stringify(profile));
      // We also get the user's JWT
      localStorage.setItem('id_token', id_token);
      });
  }

  public authenticated() {
   
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}