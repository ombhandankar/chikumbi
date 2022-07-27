import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { LoginBtnComponent } from './components/login-btn/login-btn.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { InfoFormComponent } from './components/info-form/info-form.component';
import { BtnComponent } from './components/btn/btn.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginBoxComponent,
    LoginBtnComponent,
    LoginFormComponent,
    AdminProfileComponent,
    InfoFormComponent,
    BtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
