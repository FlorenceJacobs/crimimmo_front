import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';


@Component({
  selector: 'app-add-rental',
  templateUrl: './add-rental.component.html',
  styleUrls: ['./add-rental.component.scss'],
  providers: [MessageService]
})
export class AddRentalComponent implements OnInit {

   addRentalSteps!: MenuItem[];

    constructor(public messageService: MessageService) {}

    ngOnInit() {
        this.addRentalSteps = [
            {
                label: 'Details',
                routerLink: 'details'
            },
                        {
                label: 'Rooms',
                routerLink: 'rooms'
            },
            {
                label: 'Location',
                routerLink: 'location'
            },
            {
                label: 'Calendar',
                routerLink: 'calendar'
            },
        ];
      }
}
