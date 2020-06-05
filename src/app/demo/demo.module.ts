import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { FirstViewComponent } from './first-view/first-view.component';
import { SharedModule } from '../shared/shared.module';
import { RouterLinkActive, RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GettypedComponent } from './Setting/typed/gettyped/gettyped.component';
import {TableModule} from 'primeng/table';
import { AddedittypesComponent } from './Setting/typed/addedittypes/addedittypes.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ServiceComponent } from './Setting/MS-service/add-service/service.component';
import { ListServiceComponent } from './Setting/MS-service/list-service/list-service.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AddSserviceComponent} from './Setting/MS-service/add-sservice/add-sservice.component';
import { ListSserviceComponent } from './Setting/MS-service/list-sservice/list-sservice.component';
import { RoleComponent } from './Setting/MS-service/add-ss-role/role/role.component';
import { ListeRoleComponent } from './Setting/MS-service/list-ss-role/liste-role/liste-role.component';

@NgModule({
  declarations: [FirstViewComponent, GettypedComponent, AddedittypesComponent, ServiceComponent, ListServiceComponent, AddSserviceComponent, ListSserviceComponent, RoleComponent, ListeRoleComponent,],
  imports: [
    MatSnackBarModule,
    TableModule,
    CommonModule,
    SharedModule,
    DemoRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ],
  exports: [
    FirstViewComponent,
    
  ]
})
export class DemoModule { }
