import { Component, OnInit } from '@angular/core';
import { MyserviceService, Employee } from '../myservice.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  serviceobj: MyserviceService;
  constructor(serviceobj: MyserviceService) {
    this.serviceobj = serviceobj;
  }
  employeeobj: Employee[] = []

  ngOnInit() {
    this.serviceobj.fetchEmployees();
    this.employeeobj = this.serviceobj.getEmployees();
  }

}
