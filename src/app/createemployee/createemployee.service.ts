import { Injectable } from "@angular/core";
import { Http,Response, Headers, RequestOptions} from "@angular/http";
import { Observable} from 'rxjs/Observable';
import { CEmployee} from './createemployee';
import { TransferState } from '@angular/platform-browser';

@Injectable()
export class CreateEmployeeService{
    constructor(private _http:Http){

    }
    a
   // saveEmployee():Observable<CEmployee[]> {
    saveEmployee(empForm:CEmployee):Observable<CEmployee[]>{
       // console.log(empForm);
       this.a = {
        name:'Rajat'
       }

       let headers = new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded');


        return this._http.post('http://localhost/myfoodstall/account/account/post_employees', empForm, {
            headers : headers
          })
        .map((response: Response) => <CEmployee[]>response.json());
    }

}