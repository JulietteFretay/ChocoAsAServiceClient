import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent }  from './users.component';
import { RegisterComponent } from "./register.component";
import {XcspComponent} from "./xcsp.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: UsersComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'xcsp', component: XcspComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
