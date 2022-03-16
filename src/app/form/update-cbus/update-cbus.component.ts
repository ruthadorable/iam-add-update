import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cbus } from 'src/app/models/cbus';
import { CbusService } from 'src/app/service/cbus.service';

@Component({
  selector: 'app-update-cbus',
  templateUrl: './update-cbus.component.html',
  styleUrls: ['./update-cbus.component.css']
})
export class UpdateCbusComponent implements OnInit {


  public id!:number;
  public cddb!:number;
  public btw!:number;
  public cbus!:Cbus;
  constructor(private router:Router, private cbusService: CbusService,private route:ActivatedRoute ) {

   }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.cbus=new Cbus();
    this.cbus=this.cbusService.getCbusByFind(this.id);
    /*this.cbusService.getCbusById(this.id).subscribe(
      data=>{console.log(data);
      this.cbus=data;},error=>console.log(error));*/
    }

  
  onSubmit():void{
    this.cbusService.updateCbus(this.id,this.cbus).subscribe(data=>console.log(data),error=>console.error());
    this.cbus=new Cbus();
    this.router.navigate(['/form']);
  }

}
