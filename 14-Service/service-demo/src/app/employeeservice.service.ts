import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  getEmployees()
{
  return [
	  {"id":1,"name":"A","age":30},
    {"id":2,"name":"B","age":25},
    {"id":3,"name":"C","age":26},
    {"id":4,"name":"D","age":28},
   ];
}

  constructor() { }
}
