import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username!: string;
  password!: string;
  @Output() submitClick= new EventEmitter;
 
  constructor(  ) 
  {
     
   }

  ngOnInit(): void {
  }

  onSubmit()
  {
    //to do once backend begins
    //temporary code 
    

  }

}
