import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'',
redirectTo:'login',
pathMatch:'full'
},
{
  path:"login",
  loadChildren: () =>
  import("./pages/login/login.module").then(mod => mod.LoginModule)
},
{
  path:"home",
  loadChildren: () =>
  import("./pages/home/home.module").then(mod => mod.HomeModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
