import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminGuard } from './core/guards/is-admin.guard';
import { IsLoggedGuard } from './core/guards/is-logged.guard';

const routes: Routes = [
  { path: '', loadChildren: ()=> import('./features/public/public.module').then(m=>m.PublicModule) },
  { path: 'owner', loadChildren: ()=> import('./features/owner/owner.module').then(m=>m.OwnerModule), canLoad : [IsLoggedGuard] },
  { path: 'admin', loadChildren: ()=> import('./features/admin/admin.module').then(m=>m.AdminModule), canLoad : [IsAdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
