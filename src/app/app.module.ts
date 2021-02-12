import { HttpClientModule, HttpHeaderResponse } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Browser } from 'protractor';

import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpHeaderResponse
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
