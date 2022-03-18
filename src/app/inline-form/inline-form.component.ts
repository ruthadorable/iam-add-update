import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MOCK_CBUS } from '../cbus.mock';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Cbus } from '../models/cbus';
import { CbusService } from '../service/cbus.service';

@Component({
  selector: 'app-inline-form',
  templateUrl: './inline-form.component.html',
  styleUrls: ['./inline-form.component.css']
})
export class InlineFormComponent implements OnInit {

  filteredSearch!:string;
  cbus!:Cbus[]/*=MOCK_CBUS;*/
  id!:number;
  constructor(private cbusService:CbusService,private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  this.getCbus();
  }

     private getCbus(){
    this.cbusService.getCbus().subscribe((data:any)=>{
      this.cbus=data;
    },(err:any)=>{
      console.log(err);
    })
  }
  getCbusById(cbus:Cbus):void{
     cbus.isEdit=true;
  }

  openDialog(cbus:Cbus): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: {cbus: cbus},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result)
      {
        this.id=cbus.crestra;
      this.cbusService.deleteCbus(this.id,cbus).subscribe(data=>console.log(data),error=>console.error());
      console.log('The record is deleted');
      alert("The record is succesfully deleted!");
    }
    });
  }
  
  deleteCbus(cbus:Cbus):void{
   this.cbusService.deleteCbus(cbus.crestra,cbus).subscribe(data=>console.log(data),error=>console.error());
  
  }
  saveCode(cbus :Cbus):void{
    cbus.isEdit=false;
    this.cbusService.updateCbus(cbus).subscribe(data=>console.log(data),error=>console.error());
    alert("Record updated successfully!");

  }
  closeCode(cbus:Cbus):void{
    cbus.isEdit=false;
  }

}
