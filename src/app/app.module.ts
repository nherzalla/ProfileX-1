import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,HomeComponent,ProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
