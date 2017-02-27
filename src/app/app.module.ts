import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 

import {routing,appRoutingProviders} from './app.routing';

import { AppComponent }  from './app.component';
import { AUTH_PROVIDERS }      from 'angular2-jwt';
import {Auth} from './services/auth.service';
import {AuthGuard} from './auth.guard';
import {profileService} from './services/profile.service';







import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {SettingsComponent} from './components/settings/settings.component';


@NgModule({
  imports:      [ BrowserModule,routing,HttpModule,FormsModule,ReactiveFormsModule],
  declarations: [ AppComponent,HomeComponent,ProfileComponent,SettingsComponent ],
  bootstrap:    [ AppComponent ],
  providers:[
    appRoutingProviders,
    AUTH_PROVIDERS,
    Auth,
    AuthGuard,
    HttpModule,
    profileService
    
    
  ]
})
export class AppModule { }
