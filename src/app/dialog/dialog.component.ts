import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cbus } from '../models/cbus';
import { CbusService } from '../service/cbus.service';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  cbus!:Cbus;
  crestraCode!:number;
  cddbCode!:number;
  btwCode!:number;
  @Inject(MAT_DIALOG_DATA)
  public data:any;
  
  @Output() submitClicked = new EventEmitter<any>();

  constructor( public dialogRef: MatDialogRef<DialogComponent>, private cbusService: CbusService){
  
   }

  ngOnInit(): void {
    this.crestraCode=this.data.id;
    this.cddbCode=this.data.cddb;
    this.btwCode=this.data.btw;
    console.log(this.crestraCode);
  }
 
  submit(value:any) {
    const data = value;
    this.submitClicked.emit(data);
    console.log(data.cddbCode+" "+data.btwCode);
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
