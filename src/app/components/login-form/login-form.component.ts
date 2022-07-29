import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  hide = true;
  username!: string;
  password!: string;
  @Output() submitClick= new EventEmitter;
 
  constructor(  ) 
  {
     
   }

  ngOnInit(): void {
  }

  onAdminLogin(admin: NgForm){
    if(admin.invalid){
      return;
    }
    this.username = admin.value.username;
    this.password = admin.value.pass;
    admin.resetForm();
  }
  onViewerLogin(viewer: NgForm){
    if(viewer.invalid){
      return;
    }
    this.username = viewer.value.username;
    this.password = viewer.value.pass;
    viewer.resetForm();
  }

}
