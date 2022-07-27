import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit {
  urlAdmin ="/login-form";
  showLoginForm: boolean = false;

 
 

  constructor(private router:Router,private uiService:UiService) { 
    this.uiService.onToggle().subscribe(value=> this.showLoginForm = value)
  }

  ngOnInit(): void {
  }

  showAdminLoginForm()
  { 
      this.router.navigateByUrl(this.urlAdmin);//this handles the route/path
      this.uiService.onShowLogin(); //handles UI
  }

}
