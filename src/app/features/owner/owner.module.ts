import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { MyRentalsComponent } from './pages/my-rentals/my-rentals.component';
import { MyRentalDetailsComponent } from './pages/my-rental-details/my-rental-details.component';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast'


@NgModule({
  declarations: [
    OwnerComponent,
    MyRentalsComponent,
    MyRentalDetailsComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MenuModule,
    ToastModule
  ]
})
export class OwnerModule { }
