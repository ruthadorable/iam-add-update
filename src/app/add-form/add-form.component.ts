import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cbus } from '../models/cbus';
import { CbusService } from '../service/cbus.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {


  public cbus!:Cbus;

  constructor(private cbusService:CbusService,private router:Router,private route:ActivatedRoute){ 

  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.cbusService.postCbus(this.cbus).subscribe(data=>console.log(data),error=>console.error());
    this.cbus=new Cbus();
    this.router.navigate(['/inline-form']);
  }
}
