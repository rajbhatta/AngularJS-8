import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-detail',
  template:  `
  <h3>Employee List </h3>
  <ul *ngFor="let employee of employees">
	  <li>{{employee.id}} || {{employee.name}} || {{employee.age}}
  </ul> 
            `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees=[
    {"id":1,"name":"A","age":30},
    {"id":2,"name":"B","age":25},
    {"id":3,"name":"C","age":26},
    {"id":4,"name":"D","age":28},
    
   ];
   
  constructor() { }

  ngOnInit() {
  }

}
