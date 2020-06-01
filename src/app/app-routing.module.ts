import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstViewComponent } from './demo/first-view/first-view.component';
import { TacheComponent } from './demo/Setting/tache/tache.component';
import { ObjectifComponent } from './demo/Setting/objectif/objectif/objectif.component';
import { ProjetComponent } from './demo/Setting/projet/projet/projet.component';
import { GettypedComponent } from './demo/Setting/typed/gettyped/gettyped.component';

const routes: Routes = [
  {path: 'demoInterface', component: FirstViewComponent},
//{ path: 'login', component: LoginComponent},  // make it redirect to your login component
 { path: '',redirectTo:'demoInterface', pathMatch:'full'}, //change this to your own home page
//{path: '**', component:PageNotFoundComponent} // make it redirect to your 404 not found component
{ path:'tache',component:TacheComponent},
{ path:'objectif',component:ObjectifComponent},
{ path:'projet',component:ProjetComponent},
{  path:'TypeD',component:GettypedComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
