import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employees = [];
  values: string = "";
  tempEmployeeList = [];
  constructor(private service: EmployeeService,) {

    this.employees = service.getAllEmployees();
    this.tempEmployeeList=this.employees;
  }

  ngOnInit() {
  }

  onKeyUp(event) {
    this.values = event.target.value;
    this.tempEmployeeList=this.employees.filter(employee =>     employee.mobile.slice(0, this.values.length) === this.values
    );
    console.log(this.tempEmployeeList);
  }
  openConfirmationDialog(){

      
  }


}
