import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstViewComponent } from './demo/first-view/first-view.component';
import { GettypedComponent } from './demo/Setting/typed/gettyped/gettyped.component';
import { ListServiceComponent} from './demo/Setting/MS-service/list-service/list-service.component';
import { ListSserviceComponent} from './demo/Setting/MS-service/list-sservice/list-sservice.component';
import { ListeRoleComponent } from './demo/Setting/MS-service/list-ss-role/liste-role/liste-role.component'; 

const routes: Routes = [
  {path: 'demoInterface', component: FirstViewComponent},
//{ path: 'login', component: LoginComponent},  // make it redirect to your login component
 { path: '',redirectTo:'demoInterface', pathMatch:'full'}, //change this to your own home page
//{path: '**', component:PageNotFoundComponent} // make it redirect to your 404 not found component

{  path:'gettyped',component:GettypedComponent },
{  path:'getservice',component:ListServiceComponent },
{  path:'getsservice',component:ListSserviceComponent },
{  path:'getRole',component:ListeRoleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
