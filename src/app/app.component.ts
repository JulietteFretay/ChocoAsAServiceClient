import { Component, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

export class User {
  id: number;
  name: string;
}

@NgModule({
  imports: [
    HttpModule,
  ],
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Choco As A Service';

  serverUrl = 'localhost:4567/';

  problemFile;
  problemId;

  submitProblem() {
    if (this.problemFile) {
      const reader = new FileReader();
      reader.readAsText(this.problemFile);
      reader.onload = function(){
        return;
      };
    }
  }

  loadFile(files) {
    if (files) {
      this.problemFile = files[0];
    }
  }

}


