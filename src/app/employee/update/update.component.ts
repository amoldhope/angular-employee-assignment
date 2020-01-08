import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
employee:object;
id:number;
  constructor(private service: EmployeeService,private router:ActivatedRoute) { }
name="amol";
  ngOnInit() {
    this.router.params.subscribe(res=> {this.id=res['id'];this.method()});

  }

  method(){
    this.employee=this.service.getEmployee(this.id);
    console.log(this.employee )
  }

  onSubmit(){
    this.service.updateEmployee(this.employee);
  }
}
