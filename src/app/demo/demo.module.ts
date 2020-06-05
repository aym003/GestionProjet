import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { FirstViewComponent } from './first-view/first-view.component';
import { SharedModule } from '../shared/shared.module';
import { RouterLinkActive, RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ObjectifComponent } from './Setting/objectif/objectif/objectif.component';
import { ProjetComponent } from './Setting/projet/projet/projet.component';
import { GettypedComponent } from './Setting/typed/gettyped/gettyped.component';
import {TableModule} from 'primeng/table';
import { AddedittypesComponent } from './Setting/typed/addedittypes/addedittypes.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AddeditTypeTacheComponent } from './Setting/typeTache/addedit-type-tache/addedit-type-tache.component';
import { GetTypeTacheComponent } from './Setting/typeTache/get-type-tache/get-type-tache.component';
import { GetgroupeComponent } from './Setting/groupe/getgroupe/getgroupe.component';
import { AddeditgroupeComponent } from './Setting/groupe/addeditgroupe/addeditgroupe.component';
import { AddeditTypetacheSousserviceComponent } from './Setting/typetachesousservice/addedit-typetache-sousservice/addedit-typetache-sousservice.component';
import { GetTypetacheSousserviceComponent } from './Setting/typetachesousservice/get-typetache-sousservice/get-typetache-sousservice.component';



@NgModule({
  declarations: [FirstViewComponent, ObjectifComponent, ProjetComponent, GettypedComponent, AddedittypesComponent, AddeditTypeTacheComponent, GetTypeTacheComponent, GetgroupeComponent, AddeditgroupeComponent, AddeditTypetacheSousserviceComponent, GetTypetacheSousserviceComponent],
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
