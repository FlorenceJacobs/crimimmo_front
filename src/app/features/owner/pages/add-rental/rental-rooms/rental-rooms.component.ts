import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RentalRoom } from '../../../../../core/enums/renta-room.enum';
import { CustomValidators } from 'src/app/shared/modals/subscribe/validators/custom-validators';

@Component({
  selector: 'app-rental-rooms',
  templateUrl: './rental-rooms.component.html',
  styleUrls: ['./rental-rooms.component.scss']
})

export class RentalRoomsComponent {
  @ViewChild("upload") uploadButton! : ElementRef;
  rentalRoomTypes: string[] = Object.values(RentalRoom);
  
  form = this.fb.group({
      rentalRoomsArray : this.fb.array([]),
/*       rentalRoomType : [null, [Validators.required]],
      description : [null, [Validators.minLength(2), Validators.maxLength(32)]],
      picture: [null, [Validators.required, CustomValidators.filePictureValidator(2, ['image/png', 'image/jpeg', 'image/jpg'])]]   */
    });


  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  get rentalRoomsArray(){
    // return this.form.controls["rentalRoomsArray"] as FormArray;

    return (this.form.controls["rentalRoomsArray"] as FormArray).controls as FormGroup[];
  }

  addRoom() : void {
    const rooms = this.fb.group({
      rentalRoomType : [null, [Validators.required]],
      description : [null, [Validators.minLength(2), Validators.maxLength(32)]],
      // picture: [null, [Validators.required, CustomValidators.filePictureValidator(2, ['image/png', 'image/jpeg', 'image/jpg'])]]
    });
    this.rentalRoomsArray.push(rooms);
  }

    delRoom(roomIndex : number): void {
      this.rentalRoomsArray.splice(roomIndex, 1);
    }

  triggerUpload(){
    this.uploadButton.nativeElement.click();
  }

  sendInDB(){

  }

/*   uploadfile($event:any){
    this.form.get("picture")?.setValue($event.target.files[0]);
  } */
}
