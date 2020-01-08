import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';


const routes: Routes = [
  { path: 'admin', loadChildren: () => import(`./employee/employee.module`).then(m => m.EmployeeModule) },
  { path: 'home', component: HomecomponentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
