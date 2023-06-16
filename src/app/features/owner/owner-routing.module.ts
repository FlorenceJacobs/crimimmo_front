import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner.component';
import { MyRentalsComponent } from './pages/my-rentals/my-rentals.component';
import { MyRentalDetailsComponent } from './pages/my-rental-details/my-rental-details.component';
import { AddRentalComponent } from './pages/add-rental/add-rental.component';
import { RentalDetailsComponent } from './pages/add-rental/rental-details/rental-details.component';
import { RentalLocationComponent } from './pages/add-rental/rental-location/rental-location.component';
import { RentalCalendarComponent } from './pages/add-rental/rental-calendar/rental-calendar.component';

const routes: Routes = [
  { path : '', component : OwnerComponent, children:[
    { path : '', redirectTo : 'my-rentals', pathMatch:'full'},
    { path : 'my-rentals', component : MyRentalsComponent },
    { path : 'my-rental-details', component : MyRentalDetailsComponent },
    { path : 'add-rental', component : AddRentalComponent, children : [
      { path : '', redirectTo : 'add-rental', pathMatch:'full'},
      { path : 'details', component : RentalDetailsComponent },
      { path : 'location', component : RentalLocationComponent },
      { path : 'calendar', component : RentalCalendarComponent },
    ] },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
