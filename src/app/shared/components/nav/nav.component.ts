import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { UserModel } from '../../models/user.model';
import { SharedModule } from '../../shared.module';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit{
    menuAuthItems!: MenuItem[];
    connectedUser: any;
    loginModalVisibility : boolean = false;
    subscribeModalVisibility : boolean = false;

    loginMenu : MenuItem[] = [
        { label: 'Log IN', icon: 'pi pi-sign-in',
        command: () => { this.toggleLoginModal(); }},
        { label: 'Subscribe', icon: 'pi pi-pencil',
        command: () => { this.toggleSubscribeModal();}}
    ]

    ownerMenu : MenuItem[] = [
        { label: 'My profil', icon: 'pi pi-user',
        routerLink : "owner"},
        { label: 'Logout', icon: 'pi pi-sign-out',
        command: () => { this._userService.logout()}}
    ]

    constructor(
        private messageService: MessageService,
        private _userService : UserService
        ) {}
    
    ngOnInit() {
        this._userService.user$.subscribe(user => {
            this.connectedUser = user;
            console.log(this.connectedUser)
            this.menuAuthItems = this.connectedUser? this.ownerMenu : this.loginMenu;
        });
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