import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstViewComponent } from './demo/first-view/first-view.component';
import { TacheComponent } from './demo/Setting/tache/tache.component';
import { GetobjComponent } from './demo/Setting/objectif/getobj/getobj.component';
import { ProjetComponent } from './demo/Setting/projet/projet/projet.component';
import { GettypedComponent } from './demo/Setting/typed/gettyped/gettyped.component';
import { PostaffComponent } from './demo/Affectation/postaff/postaff.component';
import { ConsultationcompoComponent } from './demo/Affectation/consultationcompo/consultationcompo.component';

const routes: Routes = [
  {path: 'demoInterface', component: FirstViewComponent},
//{ path: 'login', component: LoginComponent},  // make it redirect to your login component
 { path: '',redirectTo:'demoInterface', pathMatch:'full'}, //change this to your own home page
//{path: '**', component:PageNotFoundComponent} // make it redirect to your 404 not found component
{ path:'tache',component:TacheComponent},
{ path:'Tyopeobjectif',component:GetobjComponent},
{ path:'projet',component:ProjetComponent},
{  path:'TypeD',component:GettypedComponent },
{path:'typoss',component:PostaffComponent},
{path:'typossconsultation',component:ConsultationcompoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
