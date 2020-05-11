import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSocioComponent } from './list-socio/list-socio.component';
import { CreateSocioComponent } from './create-socio/create-socio.component';


const routes: Routes = [
  {path: '', redirectTo: 'customer', pathMatch: 'full'},
  {path: 'list', component:ListSocioComponent},
  {path: 'new', component:CreateSocioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }