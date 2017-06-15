import { Component, NgModule } from '@angular/core';


import 'rxjs/add/operator/toPromise';

export class User {
  id: number;
  name: string;
}

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  constructor() { }



}
