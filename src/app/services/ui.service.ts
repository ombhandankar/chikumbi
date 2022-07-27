import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showLoginForm:boolean = false;
  private subject = new Subject();

  constructor() { }

  onShowLogin():void //this toggles and the puts the value on the subject
  {
    this.showLoginForm = !this.showLoginForm;
    this.subject.next(this.showLoginForm);
  }

  onToggle(): Observable<any>  //this will be used by the subscribers and will fire when toggled
  {
    return this.subject.asObservable();
  }

  
}
