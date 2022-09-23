import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/services/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  private snackBar! : MatSnackBar;
 
  constructor( private User: UserService, private router: Router ) 
  {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit(): void {
  }

  

  loginUser()
  {
    
    this.User.userLogin(this.loginForm.value).subscribe(
      (data: any) => {
        let token = data.token;
        localStorage.setItem('Token', token);
        this.router.navigate([ '/' ]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        if (err.error.msg) {
          this.snackBar.open(err.error.msg, 'Undo');
        } else {
          this.snackBar.open('Something Went Wrong!');
        }
      }
  );


  }

  onSubmit()
  {
    //to do once backend begins
    //temporary code 
    

  }

}
