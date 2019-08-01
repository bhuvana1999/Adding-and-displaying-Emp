import { Component, OnInit } from '@angular/core';
import { MyserviceService, Employee } from '../myservice.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
service:MyserviceService;
createdEmployee:Employee;
  constructor(service:MyserviceService) {
    this.service=service;
   }

  ngOnInit() {
  }
add(data:any)
{
this.createdEmployee=new Employee(data.eid,data.ename,data.edesignation,data.eaddr,data.econtact);
this.service.add(this.createdEmployee);
}

}
