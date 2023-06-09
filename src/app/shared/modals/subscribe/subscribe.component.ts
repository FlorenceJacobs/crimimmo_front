import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/features/public/services/user.service';
import { SharedModule } from '../../shared.module';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {
 @Input() modalVisibility! : boolean;
@Output() closingModal = new EventEmitter<boolean>();
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private userService : UserService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  subscribe() {
    if(this.form.invalid) {
      return;
    }
/*     this.userService.login(this.form.value).subscribe({ 
      next: () => {
        // afficher un message
        this.messageService.add({ severity: 'success', detail: 'Bienvenue ' + user.firstname });
        // rediriger vers la page de login
        this.router.navigate(['home']);
      },
    }) */
  }

  closeModal(){
    this.modalVisibility = false;
    this.closingModal.emit(this.modalVisibility);
  }
}