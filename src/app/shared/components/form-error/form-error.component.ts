import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnChanges{
 @Input()
  control: AbstractControl|null = null;
  
  ngOnChanges(): void {
    
  }
  
}

