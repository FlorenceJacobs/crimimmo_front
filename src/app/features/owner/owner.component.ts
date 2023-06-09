import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { UserModel } from '../../shared/models/user.model';

@Component({
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
    itemsLogout!: MenuItem[];
    user!: UserModel;


    constructor(private messageService: MessageService) {}
    
    ngOnInit() {
        this.itemsLogout = [
            {
                items: [
                    {
                        label: 'My rentals',
                        icon: 'pi pi-list',
                        routerLink: '/fileupload'
                    },
                    {
                        label: 'Add a rental',
                        icon: 'pi pi-home',
                        routerLink: '/fileupload'
                    },
                    {
                        label: 'Log OUT',
                        icon: 'pi sign-out',
                        routerLink: '/fileupload'
                    }
                ]
            }
        ];
    }

}
