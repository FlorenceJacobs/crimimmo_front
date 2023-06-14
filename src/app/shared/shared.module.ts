import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { FileUploadModule } from 'primeng/fileupload';
import { MenuModule } from 'primeng/menu';
import { NavComponent } from './components/nav/nav.component';
import { SubscribeComponent } from './modals/subscribe/subscribe.component';
import { LoginComponent } from './modals/login/login.component';
import { FormErrorComponent } from './components/form-error/form-error.component';

const exportModules = [
  FormsModule,
  ReactiveFormsModule,
  CardModule,
  ButtonModule,
  InputTextModule,
  InputNumberModule,
  InputTextareaModule,
  InputSwitchModule,
  DialogModule,
  ToastModule,
  CalendarModule,
  PasswordModule,
  FileUploadModule,
  MenuModule,
  
];

const exportDeclarations = [
        NavComponent,
        LoginComponent,
        SubscribeComponent,
        FormErrorComponent
];


@NgModule({
  declarations: [
  ...exportDeclarations,
  FormErrorComponent,
  ],
  imports: [
    CommonModule,
    ...exportModules
  ],
  exports:[
    ...exportDeclarations,
     ...exportModules
  ],
})
export class SharedModule { }
