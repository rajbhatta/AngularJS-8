import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'employee-list',
  templateUrl:  `
  <h3>Employee List </h3>
  <ul *ngFor="let employee of employees">
	  <li>{{employee.name}}
  </ul> 
            `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees=[];

  constructor(private _employeeserviceService: EmployeeserviceService) {};

  ngOnInit() 
  {
    this.employees=this._employeeserviceService.getEmployees();
  }

}
