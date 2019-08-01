import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { MyserviceService } from './myservice.service';
import { FormsModule } from '@angular/forms';
import { OnlinelinkComponent } from './onlinelink/onlinelink.component';
import { OnlineserviceService } from './onlineservice.service';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    DisplayEmployeeComponent,
    OnlinelinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [HttpClient, MyserviceService,OnlineserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
