import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner.component';
import { MyRentalsComponent } from './pages/my-rentals/my-rentals.component';
import { MyRentalDetailsComponent } from './pages/my-rental-details/my-rental-details.component';
import { AddRentalComponent } from './pages/add-rental/add-rental.component';

const routes: Routes = [
  { path : '', component : OwnerComponent, children:[
    { path : '', redirectTo : 'my-rentals', pathMatch:'full'},
    { path : 'my-rentals', component : MyRentalsComponent },
    { path : 'my-rental-details', component : MyRentalDetailsComponent },
    { path : 'add-rental', component : AddRentalComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
