import {OnInit, Component} from '@angular/core';
import {AlertService} from '../service/alertservice';

@Component({
    moduleId:module.id,
    selector:'alert',
    templateUrl : 'alert.component.html',
})
export class AlertComponent implements OnInit{
    message : any;
    constructor(private alertservice:AlertService){

    }
    ngOnInit(){
        this.alertservice.getMessage().subscribe(message=>{this.message = message;});
        console.log(this.message);
    }
}