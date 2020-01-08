import { Injectable } from '@angular/core';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees=[
    {
      id:1001,
      name:"tim",
      age:24,
      mobile:"96023040442"
    },
    {
      id:1002,
      name:"sam",
      age:24,
      mobile:"8053638262"
    },
    
    {
      id:1003,
      name:"mack",
      age:24,
      mobile:"98023040442"
    }
  ];


  getAllEmployees(){
    return this.employees;
  }

  getEmployee(id){
    return this.employees.find(employee=>employee.id==id);
  }
  updateEmployee(employee){

    console.log("updated employee" +employee.id);

    let temp=this.employees.filter(emp=>{

      employee.id===emp.id;
    });
    temp=employee;

  }
  constructor() { }
}
