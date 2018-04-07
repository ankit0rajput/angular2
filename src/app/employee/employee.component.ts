import {Component} from "@angular/core"

@Component({
	selector:"my-employee",
	templateUrl:'../employee/employee.component.html'
})
export class EmployeeComponent{
	firstName: string = "Ankit";
	lastName : string = "Rajput";
	gender : string = "Male";
	age: number= 10;
	showDetails:boolean = true;
	
	toggleDetails(){
		this.showDetails = !this.showDetails;
	}
}
