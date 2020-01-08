import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css']
})
export class EmployeeInformationComponent implements OnInit {
  id:number;
  employee:Object;
    constructor(private router:ActivatedRoute,private service:EmployeeService) { }
  
    ngOnInit() {
    
    this.router.params.subscribe(res=> {this.id=res['id'];this.method();
  }) ;
    
  
    }

    method(){
      this.employee=this.service.getEmployee(this.id);
      console.log(this.employee )
    }
  

}
