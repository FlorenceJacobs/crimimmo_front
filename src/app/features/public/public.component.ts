import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { UserModel } from '../../shared/models/user.model';

@Component({
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit{
    itemsLogin!: MenuItem[];
    user!: UserModel;
    loginModalVisibility : boolean = false;
    subscribeModalVisibility : boolean = false;

    constructor(private messageService: MessageService) {}
    
    ngOnInit() {
        this.itemsLogin = [
            {
                items: [
                    {
                        label: 'Log IN',
                        icon: 'pi pi-sign-in',
                        command: () => {
                            this.toggleLoginModal();
                        }
                    },
                    {
                        label: 'Subscribe',
                        icon: 'pi pi-pencil',
                        command: () => {
                            this.toggleSubscribeModal();
                        }
                    }
                ]
            }
        ];
    }
    toggleLoginModal() {
        this.loginModalVisibility = true;
    }
    toggleSubscribeModal() {
        this.subscribeModalVisibility = true;
    }
    toggleVisibilityToFalse(value : boolean){
         this.loginModalVisibility = value;
         this.subscribeModalVisibility = value;
    }

}