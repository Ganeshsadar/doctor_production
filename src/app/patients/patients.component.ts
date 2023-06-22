import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddpatientsComponent } from '../addpatients/addpatients.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddpatientsComponent);
  }

}
