import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule

  ]
})
export class PublicModule { }
