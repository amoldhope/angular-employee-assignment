import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { UpdateComponent } from './update/update.component';
import { EmployeeInformationComponent } from './employee-information/employee-information.component'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EmployeeDetailsComponent,UpdateComponent, EmployeeInformationComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,FormsModule
    
  ]
})
export class EmployeeModule { }
