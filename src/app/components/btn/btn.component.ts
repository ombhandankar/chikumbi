import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {

  @Input() text!: string;
  @Input() url!: string;
  @Output() gBtnClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
    this.gBtnClick.emit();
  }
  

}
