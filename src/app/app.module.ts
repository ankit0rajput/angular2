import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';

import {AlertService} from './service/alertservice';

import { AlertComponent} from './directives/alert.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeTitlePipe } from './employeelist/EmployeeTitle.pipe';
import { LoginComponent } from './login/login.component';
import { HeaderComponent} from './common/header.component';
import { FooterComponent} from './common/footer.component';
import { RegisterComponent } from './register/register.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';


const appRoutes : Routes = [
  {path:'login',component : LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'employeelist',component:EmployeelistComponent},
  {path:'createemployee',component:CreateemployeeComponent}
  /*{path:'',component:LoginComponent}*/
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeelistComponent,
    EmployeeTitlePipe,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    CreateemployeeComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
