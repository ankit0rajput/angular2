import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { CEmployee } from './createemployee';
import { CreateEmployeeService } from './createemployee.service'; 
import { Router } from '@angular/router';
import {AlertService} from '../service/alertservice';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css'],
  providers: [CreateEmployeeService,AlertService]
})
export class CreateemployeeComponent implements OnInit {
  //private _createemployeeservice:CreateEmployeeService;
//  private router : Router;
  constructor(private _createemployeeservice:CreateEmployeeService,private router : Router,private _alertService:AlertService) { 
    //constructor(_createemployeeservice:CreateEmployeeService){
    //    this._createemployeeservice = CreateEmployeeService;
     //   this.router=Router;
  }

  ngOnInit() {
  }

  saveEmployee(empForm:NgForm):void{
    //console.log(empForm.value);
    this._createemployeeservice.saveEmployee(empForm.value)
      .subscribe(
        data=>{
          this._alertService.success('Registration successful', true);
          this.router.navigate(['/employeelist']);
          //this.router.navigate(['/asdf']);
         // this.router.navigate( [ 'Details', { id: company.id }] );
          return false;
        },
        error=>{

        });
    
  }
}
