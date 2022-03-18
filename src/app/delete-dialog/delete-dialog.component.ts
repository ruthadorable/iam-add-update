import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { Cbus } from '../models/cbus';
import { CbusService } from '../service/cbus.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
 
  
  @Output() submitClicked = new EventEmitter<any>();

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,cbusService: CbusService, @Inject(MAT_DIALOG_DATA) public data:Cbus
  ) {
    
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

 

  ngOnInit(): void {
  }
  

}
