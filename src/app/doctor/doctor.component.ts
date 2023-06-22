import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
disableSelect: any;

constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddDoctorComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

}
