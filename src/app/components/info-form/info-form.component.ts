import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit {

  formBuilder = new FormBuilder;

  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor() { }

  ngOnInit(): void {
  }

}
