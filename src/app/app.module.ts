import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
 

import {routing,appRoutingProviders} from './app.routing';

import { AppComponent }  from './app.component';
import { AUTH_PROVIDERS }      from 'angular2-jwt';
import {Auth} from './services/auth.service';
import {AuthGuard} from './auth.guard';
import {profileService} from './services/profile.service';







import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {SettingsComponent} from './components/settings/settings.component';
import {AddressComponent} from './components/settings/address.component';
import {EducationComponent} from './components/settings/education.component';
import {ExperienceComponent} from './components/settings/experience.component';
import {PortfolioComponent} from './components/settings/portfolio.component';


@NgModule({
  imports:      [ BrowserModule,routing,HttpModule,FormsModule,ReactiveFormsModule,MyDatePickerModule],
  declarations: [ AppComponent,HomeComponent,ProfileComponent,SettingsComponent,AddressComponent,EducationComponent,ExperienceComponent,PortfolioComponent],
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
