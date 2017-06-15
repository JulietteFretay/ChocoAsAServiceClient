import { Component, NgModule } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";

export class User {
  id: number;
  name: string;
}

@Component({
  selector: 'xcsp',
  templateUrl: './xcsp.component.html',
  styleUrls: ['./xcsp.component.css'],
})
export class XcspComponent {
  title = 'Choco As A Service';

  serverUrl = 'http://localhost:4567';

  problem ="";
  problemId;

  constructor(private http: Http,private router: Router) { }

  loadProblem() {
    this.http.post(this.serverUrl + '/problem', this.problem).toPromise().then(res => this.problemId = res.text());
  }

}


