import { Component, Input, OnInit } from '@angular/core';
import { DeleteDialogComponent } from 'src/app/delete-dialog/delete-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { Cbus } from 'src/app/models/cbus';
import { CbusService } from 'src/app/service/cbus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablerow',
  templateUrl: './tablerow.component.html',
  styleUrls: ['./tablerow.component.css']
})
export class TablerowComponent implements OnInit {

  
  @Input()
  cbusObject!:Cbus;
  private crestra2send!:number;
  
  constructor(public dialog : MatDialog ,private cbusService:CbusService,private router:Router ) { 
  }

  ngOnInit(): void {
    this.crestra2send=this.cbusObject.crestra;
  }
  openDialog(cbus:Cbus): void {
    this.dialog.open(DialogComponent, {
      width: '350px',
      data: {
        id: cbus.crestra,
        cddb:cbus.coffcddb,
        btw:cbus.coffbtwtva
      }
    });
  }
  
  deleteDialog(cbus:Cbus): void{
    this.dialog.open(DeleteDialogComponent,{
      width: '30%',
    })
  }
  updateCbus(id:number)
  {
    this.router.navigate(['update',id]);
  }

}
