import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';

const routes: Routes = [
  {
   path :'', component :AdminComponent , children : [
      {
        path :'', loadChildren :'./layout/admin/products/products.module#ProductsModule'
      },
      {
        path :'profile' , loadChildren :'./layout/admin/profile/profile.module#ProfileModule'
      }
  ]
//, authentificataion {} attention pas le meme path path :/athentification
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
