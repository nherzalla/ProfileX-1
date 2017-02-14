// app/auth.service.ts

import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  
  lock = new Auth0Lock('hDIOjnQhv5O1SW3xdwLQ3O102oDRydKZ', 'myfaceprofile.auth0.com', { auth: {
    params: {scope: 'openid email user_metadata app_metadata picture'},
  }});

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult:any) => 
    {
      this.lock.getUserInfo(authResult.accessToken, function(error:any,profile:any)
      {
          if(error)
          {
            throw new Error(error);
          }
          console.log(profile);
          console.log(authResult.idToken);
          localStorage.setItem('id_token', authResult.idToken);
          localStorage.setItem('profile', JSON.stringify(profile));
      });
      
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
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