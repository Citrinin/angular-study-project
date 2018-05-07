import { AbstractControl } from '@angular/forms'

export class MatchPasswordValidation {

    static MatchPassword(abstractControl: AbstractControl) {
        let password = abstractControl.get('password').value;
        let confirmPassword = abstractControl.get('confirmPassword').value;
        if (password != confirmPassword) {
            console.log('passwords not match');
            abstractControl.get('confirmPassword').setErrors({ MatchPassword: true })
        } else {
            console.log('passwords match');
            return null;
        }
    }
}