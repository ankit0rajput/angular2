import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http,Response} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeelistService{
    constructor(private _http:Http){

    }
    getEmployees():Observable<IEmployee[]> {
        //http://jsonplaceholder.typicode.com/posts/
        
        return this._http.get("http://localhost/myfoodstall/account/get_employees")
                        .map((response: Response) => <IEmployee[]>response.json())
                        .catch(this.handleError);
                        
    }
    handleError(error:Response){
        return Observable.throw(error);
    }
    delete(id: number) {
        return this._http.delete('http://localhost/myfoodstall/account/delete/' + id);
    }
}