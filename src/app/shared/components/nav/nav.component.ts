import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { UserModel } from '../../models/user.model';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit{
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

};