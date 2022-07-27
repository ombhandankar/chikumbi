import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-btn',
  templateUrl: './login-btn.component.html',
  styleUrls: ['./login-btn.component.css']
})
export class LoginBtnComponent implements OnInit {
  @Input() text!: string;
  @Input() url!: string;
  @Output() btnClick = new EventEmitter();

  router!: Router;

  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
    this.btnClick.emit();
  }
  
}
