import { Component, OnInit } from '@angular/core';
import { MOCK_CBUS } from '../cbus.mock';
import { Cbus } from '../models/cbus';
import { CbusService } from '../service/cbus.service';

@Component({
  selector: 'app-inline-form',
  templateUrl: './inline-form.component.html',
  styleUrls: ['./inline-form.component.css']
})
export class InlineFormComponent implements OnInit {

  filteredSearch!:string;
  cbus:Cbus[]=MOCK_CBUS;
  constructor(private cbusService:CbusService) { }

  ngOnInit(): void {
     /*private getCbus(){
    this.cbusService.getCbus().subscribe((data:any)=>{
      this.cbus=data;
    },(err:any)=>{
      console.log(err);
    })
  }*/
  }
  getCbusById(cbus:Cbus):void{
     cbus.isEdit=true;
  }
  deleteCbus(id:number):void{
   /* this.cbusService.deleteCbus(id).subscribe(data=>console.log(data),error=>console.error());*/
  }
  saveCode(cbus :Cbus):void{
    cbus.isEdit=false;
    this.cbusService.updateCbus(cbus.crestra,cbus).subscribe(data=>console.log(data),error=>console.error());

  }
  closeCode(cbus:Cbus):void{
    cbus.isEdit=false;
  }

}
