import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { OnlineserviceService } from './onlineservice.service';


const routes: Routes = [
  {
    path:'app-add-employee',
    component :AddEmployeeComponent
  },

  {
    path:'app-display-employee',
    component :DisplayEmployeeComponent
  },
  {
    path:'OnlinelinkComponent',
    component : OnlineserviceService
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
