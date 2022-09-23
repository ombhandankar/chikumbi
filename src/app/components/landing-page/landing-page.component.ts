import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  img = "/src/assets/photo/bkg2.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
