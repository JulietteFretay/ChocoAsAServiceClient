import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';


import { AppComponent } from './app.component';
import { UsersComponent } from './users.component';
import { RegisterComponent } from './register.component';

import {AppRoutingModule} from "./app-routing.module";
import {XcspComponent} from "./xcsp.component";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RegisterComponent,
    XcspComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

