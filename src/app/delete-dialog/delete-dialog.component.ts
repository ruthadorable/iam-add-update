import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CbusService } from '../service/cbus.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(private cbusService:CbusService, private router:Router) { }

  ngOnInit(): void {
  }
  

}
