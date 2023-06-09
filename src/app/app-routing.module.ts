import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: ()=> import('./features/public/public.module').then(m=>m.PublicModule) },
  { path: 'owner', loadChildren: ()=> import('./features/owner/owner.module').then(m=>m.OwnerModule) },
  { path: 'admin', loadChildren: ()=> import('./features/admin/admin.module').then(m=>m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
