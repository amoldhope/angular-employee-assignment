import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { UpdateComponent } from './update/update.component';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';


const routes: Routes = [
    { path: '', component: EmployeeDetailsComponent },
    { path: 'update/:id', component: UpdateComponent },
    { path: 'employeeinfo/:id', component: EmployeeInformationComponent },

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EmployeeRoutingModule {

}