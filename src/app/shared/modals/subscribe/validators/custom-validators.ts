import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {

   public static haveRequiredAge(requiredAge : number) : ValidatorFn{
    return (control : AbstractControl) : ValidationErrors | null => {
      let value = control.value;
      if(!value) return null;
      let val_milli = new Date(value).getTime();
      let delta = new Date().getTime() - val_milli;
      let years = new Date(delta).getFullYear() - 1970;
      if(years < requiredAge) return {
        isAdult:{
          requiredAge : requiredAge,
          actualAge : years,
          defaultMessage: `You must be ${requiredAge} years old, come back in ${requiredAge-years} years`
        }};
      return null;
    }
  }

   public static filePictureValidator(maxMega: number, allowedTypes: string[]): ValidatorFn{
    return (control : AbstractControl) : ValidationErrors | null => {
      const file = control.value;
      if (file) {
        // Check file size (in octets)
        if (file.size > maxMega * 1024 * 1024) {
          return { 'fileSizeError': true };
        }
        // Check file type
        if (!allowedTypes.includes(file.type)) {
          console.log(file.type)
          return { 'fileTypeError': true };
        }
      }
      return null;
    }
  }
}

