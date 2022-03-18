import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cbus } from '../models/cbus';
import { CbusService } from '../service/cbus.service';
import {FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {


  addForm!: FormGroup;


  get crestra(){return this.addForm.get('crestra')}

  public cbus!:Cbus;

  constructor(private formBuilder: FormBuilder,private cbusService:CbusService,private router:Router,private route:ActivatedRoute){ 

  }

  ngOnInit(): void {
    this.addForm= this.formBuilder.group({
    crestra: ['',Validators.required],
    cnivbus: ['',Validators.required],
    cgesbus: ['',Validators.required],
    ctypoff: ['',Validators.required],
    uot: ['',Validators.required],
    coffcddb: ['',Validators.required],
    coffbtwtva: ['',Validators.required]
    })
  }

  onSubmit()
  {
    if(this.addForm.valid)
    {
    this.cbusService.postCbus(this.addForm.value)
    .subscribe({
      next:(res)=>{
        alert("Record added succesfully");
        this.addForm.reset();
      },error:()=>console.error()});
    this.cbus=new Cbus();
    this.router.navigate(['/inline-form']);
    }
  }
}
