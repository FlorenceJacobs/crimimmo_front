import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
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

  login() {
    if(this.form.invalid) {
      return;
    }
     this.userService.login(this.form.value).subscribe({ 
      next: () => {
        // afficher un message
        this.messageService.add({ severity: 'success', detail: 'Bienvenue ' + this.form.value.firstname });
        // rediriger vers la page de login
        this.router.navigate(['home']);
      },
    })
  }

  closeModal(){
    this.modalVisibility = false;
    this.closingModal.emit(this.modalVisibility);
  }
}