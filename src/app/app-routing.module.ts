import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DoctorComponent } from './doctor/doctor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecintActivityComponent } from './recint-activity/recint-activity.component';
import { PatientsComponent } from './patients/patients.component';
import { PrefrenceComponent } from './prefrence/prefrence.component';

const routes: Routes = [
  // {path: 'nav',component:NavbarComponent},
  // {path: '',redirectTo:'das',pathMatch:'full'},
  {path:'das',component:DashbordComponent},
  // {path:'',component:SidebarComponent},
  {path:'doc',component:DoctorComponent},
  {path:'recent',component:RecintActivityComponent},
  {path:'patients',component:PatientsComponent},
  {path:'prefrence',component:PrefrenceComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
