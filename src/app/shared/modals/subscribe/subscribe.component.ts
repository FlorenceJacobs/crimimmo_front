import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { SharedModule } from '../../shared.module';
import { MessageService } from 'primeng/api';
import { CustomValidators } from './validators/custom-validators';
import { switchMap } from 'rxjs/operators';

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

  register() {
    if(this.form.invalid) {
      return;
    }
    this.userService.register(this.form.value).subscribe(()=>{
      this.userService.login({
        password : this.form.value.password,
        email : this.form.value.email
      }).subscribe({ 
      next: () => {
        // afficher un message
        this.messageService.add({ severity: 'success', detail: 'Bienvenue ' + this.form.value.firstname });
        // rediriger vers la page de login
        this.router.navigate(['home']);
      },
    });
    })
  };

  closeModal(){
    this.modalVisibility = false;
    this.closingModal.emit(this.modalVisibility);
  }
}