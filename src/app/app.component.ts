import { Component, NgModule } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Choco As A Service';

  serverUrl = 'http://localhost:4567';

  problem;
  problemId;

  constructor(private http: Http) { }

  loadProblem() {
    this.http.post(this.serverUrl + '/problem', this.problem).toPromise().then(res => this.problemId = res.text());
  }

}


