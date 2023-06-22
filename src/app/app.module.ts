import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecintActivityComponent } from './recint-activity/recint-activity.component';
import { SidebarComponent } from './sidebar/sidebar.component';


import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ChartModule } from 'angular-highcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientsComponent } from './patients/patients.component';
import {MatInputModule} from '@angular/material/input';
import { AddpatientsComponent } from './addpatients/addpatients.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PrefrenceComponent } from './prefrence/prefrence.component';
import { DocComponent } from './doc/doc.component';
@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    SidebarComponent,
    RecintActivityComponent,
    NavbarComponent,
    DoctorComponent,
    AddDoctorComponent,
    PatientsComponent,
    AddpatientsComponent,
    PrefrenceComponent,
    DocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    ChartModule,
    NgApexchartsModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
   

    

    
    
    

    

    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
