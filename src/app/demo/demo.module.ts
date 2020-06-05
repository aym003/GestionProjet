import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { FirstViewComponent } from './first-view/first-view.component';
import { SharedModule } from '../shared/shared.module';
import { RouterLinkActive, RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProjetComponent } from './Setting/projet/projet/projet.component';
import { GettypedComponent } from './Setting/typed/gettyped/gettyped.component';
import {TableModule} from 'primeng/table';
import { AddedittypesComponent } from './Setting/typed/addedittypes/addedittypes.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { GetobjComponent } from './Setting/objectif/getobj/getobj.component';
import { AddditobjComponent } from './Setting/objectif/addditobj/addditobj.component';
import { PostaffComponent } from './Affectation/postaff/postaff.component'; 
import {DropdownModule} from 'primeng/dropdown';
import {PickListModule} from 'primeng/picklist';
import { ConsultationcompoComponent } from './Affectation/consultationcompo/consultationcompo.component';
@NgModule({
  declarations: [FirstViewComponent, ProjetComponent, GettypedComponent, AddedittypesComponent, GetobjComponent, AddditobjComponent, PostaffComponent, ConsultationcompoComponent],
  imports: [
    PickListModule,
    DropdownModule,
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
