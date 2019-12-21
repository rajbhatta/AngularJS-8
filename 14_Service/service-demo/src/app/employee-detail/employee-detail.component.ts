import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'employee-detail',
  templateUrl:  `
  <h3>Employee List </h3>
  <ul *ngFor="let employee of employees">
	  <li>{{employee.id}} || {{employee.name}} || {{employee.age}}
  </ul> 
            `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees=[];

  constructor(private _employeeserviceService: EmployeeserviceService) {};

  ngOnInit() 
  {
    this.employees=this._employeeserviceService.getEmployees();
  }

}
