import { Component, NgModule } from '@angular/core';


import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";

export class User {
  id: number;
  name: string;
}

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  title = 'Choco As A Service';

  serverUrl = 'http://localhost:4567';

  problem;
  problemId;

  constructor(private router: Router) { }

  login() {
    this.router.navigate(['/xcsp']);  }

}


