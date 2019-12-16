import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  template: `
  <h3>Employee List </h3>
  <ul *ngFor="let employee of employees">
	  <li>{{employee.name}}
  </ul> 
            `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

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
