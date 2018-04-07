import { Component, OnInit } from '@angular/core';
import {IEmployee} from './employee';
import {EmployeelistService} from './employeelist.service';


@Component({
  selector: 'employee-list',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
  providers: [EmployeelistService]
})
export class EmployeelistComponent implements OnInit  {
	employees : IEmployee[];
	statusMessage : String = "Loading Please Wait.....";
	constructor(private _employeeService:EmployeelistService){
		
	}
	ngOnInit(){
		//this.employees = this._employeeService.getEmployees();
		/*this._employeeService.getEmployees()
							.subscribe((employeeData) => this.employees = employeeData,
							(error)=>{
								this.statusMessage = "Webservice not responding!";
							});*/
							this.loadAllUsers();
	}
	getEmployees():void{
		this._employeeService.getEmployees()
							.subscribe((employeeData) => this.employees = employeeData,
							(error)=>{
								this.statusMessage = "Webservice not responding!";
							});
	}
	deleteUser(id:number){
		this._employeeService.delete(id).subscribe((employeeData) => { this.loadAllUsers() });
		this.loadAllUsers();
	}
	loadAllUsers() {
		console.log('aaaaaaaaaaaaa');
        this._employeeService.getEmployees().subscribe((employeeData) => { this.employees = employeeData; });
    }
}
