import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { SharedModule } from '../../shared.module';
import { MessageService } from 'primeng/api';
import { CustomValidators } from './validators/custom-validators';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {

  @ViewChild("upload") uploadButton! : ElementRef;
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
      firstname : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
      lastname : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
      email : [null, [Validators.required, Validators.minLength(5), Validators.maxLength(256), Validators.email]],
      birthdate : [null, [Validators.required, CustomValidators.haveRequiredAge(18)]],
      password: [null, [Validators.required]],
      picture: [null, [Validators.required, CustomValidators.filePictureValidator(2, ['image/png', 'image/jpeg', 'image/jpg'])]]
        
    });
  }

  triggerUpload(){
    this.uploadButton.nativeElement.click();
  }

  uploadfile($event:any){
    this.form.get("picture")?.setValue($event.target.files[0]);
  }

  subscribe() {
    console.log("on save modal : enter in  'subscribe function'");
    if(this.form.invalid) {
       console.log("on save modal : enter in  'subscribe function' : this.form.invalid" + JSON.stringify(this.form.value));
      return;
    }
    console.log("on save modal : enter in  'subscribe function' : this.form.valid");

  this.userService.subscribe(this.form.value)/*     .login({ 
      next: () => {
        // afficher un message
        this.messageService.add({ severity: 'success', detail: 'Bienvenue ' + user.firstname });
        // rediriger vers la page de login
        this.router.navigate(['home']);
      },
    }) */
  }

  /*     this.userService.login(this.form.value).subscribe({ 
      next: () => {
        // afficher un message
        this.messageService.add({ severity: 'success', detail: 'Bienvenue ' + user.firstname });
        // rediriger vers la page de login
        this.router.navigate(['home']);
      },
    }) */

  closeModal(){
    this.modalVisibility = false;
    this.closingModal.emit(this.modalVisibility);
  }
}