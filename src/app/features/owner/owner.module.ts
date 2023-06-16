import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { MyRentalsComponent } from './pages/my-rentals/my-rentals.component';
import { MyRentalDetailsComponent } from './pages/my-rental-details/my-rental-details.component';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { AddRentalComponent } from './pages/add-rental/add-rental.component'
import { SharedModule } from 'src/app/shared/shared.module';
import { RentalDetailsComponent } from './pages/add-rental/rental-details/rental-details.component';
import { RentalLocationComponent } from './pages/add-rental/rental-location/rental-location.component';
import { RentalCalendarComponent } from './pages/add-rental/rental-calendar/rental-calendar.component';
import { StepsModule } from 'primeng/steps';

@NgModule({
  declarations: [
    OwnerComponent,
    MyRentalsComponent,
    MyRentalDetailsComponent,
    AddRentalComponent,
    RentalDetailsComponent,
    RentalLocationComponent,
    RentalCalendarComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
    StepsModule
  ]
})
export class OwnerModule { }
