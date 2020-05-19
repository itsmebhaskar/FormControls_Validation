import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeComponent } from './employee/employee.component';
import {Routes, RouterModule} from '@angular/router'

var routes:Routes=[{path:'employee',component:EmployeeComponent, pathMatch:'full'}];

@NgModule({
  imports:      [ BrowserModule,ReactiveFormsModule, FormsModule,RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, EmployeeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
