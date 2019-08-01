import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  [x: string]: any;
  http: HttpClient;
  employeeobj: Employee[] = [];

  constructor(http: HttpClient) {
    this.http = http;
  }
  fetched: boolean = false;
  fetchEmployees() {
    this.http.get('./assets/employee.json')
      .subscribe(data => {
        if (!this.fetched) {
          this.convert(data);
          this.fetched = true;
        }
      });
  }
  getEmployees(): Employee[] {
    return this.employeeobj;
  }
  convert(data: any) {
    for (let o of data) {
      let e = new Employee(o.Id, o.Name, o.Designation, o.Address, o.Contact)
      this.employeeobj.push(e);
    }}
    add(e:Employee)
    {
this.employeeobj.push(e);
    }

}
export class Employee {
  Name: string;
  Id: number;
  Designation: string;
  Address: string;
  Contact: number;
  constructor(Id: number, Name: string, Designation: string, Address: string, Contact: number) {
    this.Id = Id;
    this.Name = Name;
    this.Designation = Designation;
    this.Address = Address;
    this.Contact = Contact;

  }

}