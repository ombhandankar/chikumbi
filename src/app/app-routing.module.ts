import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { InfoFormComponent } from './components/info-form/info-form.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { LoginFormComponent } from './components/login-form/login-form.component';



const routes: Routes = [
  {path: 'login-form', component: LoginFormComponent},
  {path: 'admin-profile',component: AdminProfileComponent},
  {path: 'info-form',component:InfoFormComponent},
  {path: 'login-box',component: LoginBoxComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
