import { Component, ViewChild, ElementRef } from '@angular/core';
import { RentalType } from 'src/app/core/enums/rental-type.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/shared/modals/subscribe/validators/custom-validators';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.scss']
})
export class RentalDetailsComponent {
  @ViewChild("upload") uploadButton! : ElementRef;
  rentalTypes: string[] = Object.values(RentalType);
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.form = this.fb.group({
      name : [null, [Validators.required]],
      description : [null, [Validators.minLength(2), Validators.maxLength(32)]],
      rentalType : [null, [CustomValidators.OneOfTypes(this.rentalTypes)]],
      nbrPersMax : [null, [Validators.min(1)]],
      nightPrice: [null, [Validators.min(1)]],
      weekPrice: [null, [Validators.min(1), CustomValidators.filePictureValidator(2, ['image/png', 'image/jpeg', 'image/jpg'])]],
      weekendPrice: [null, [Validators.min(1)]],
      picture: [null, [Validators.required, CustomValidators.filePictureValidator(2, ['image/png', 'image/jpeg', 'image/jpg'])]]  
    });

      this.form.get('weekendPrice')?.addValidators([
      CustomValidators.largerThan(this.form.get('nightPrice'), 'Prix d\'une nuit minimum')
    ]);

      this.form.get('weekPrice')?.addValidators([
      CustomValidators.largerThan(this.form.get('nightPrice'), 'Prix d\'une nuit minimum')
    ]);
  }

  triggerUpload(){
    this.uploadButton.nativeElement.click();
  }

  uploadfile($event:any){
    this.form.get("picture")?.setValue($event.target.files[0]);
  }

  sendInDB(){
    this.router.navigate(['/owner/add-rental/rooms']);
    if(this.form.invalid) {
      return;
    }

  }

}
