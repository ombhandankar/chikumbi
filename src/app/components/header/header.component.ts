import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private urlLogin = "/login-box";
  private urlHome = "/home"

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  showLoginBox()
  {
      this.router.navigateByUrl(this.urlLogin);
  }

  homePage()
  {
    this.router.navigateByUrl(this.urlHome)
  }

}
