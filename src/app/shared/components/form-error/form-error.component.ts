import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnDestroy{
 @Input()
  control: AbstractControl|null = null;
  
  ngOnDestroy(): void {
    console.log(this.control);
  }
  
}

