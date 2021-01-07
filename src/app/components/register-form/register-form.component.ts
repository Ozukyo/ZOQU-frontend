import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  changedValue = false;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
      }, {validators: this.passwordCheck.bind(this)})
    });

    this.detectChangedValue('email');
    this.detectChangedValue('userPassword.password');
    this.detectChangedValue('userPassword.confirmPassword');

  }

  onSubmit(): void {
    console.log(this.registerForm);
  }

  passwordCheck(group: FormGroup): { [s: string]: boolean } {
    if (!(group.get('password').value === group.get('confirmPassword').value)) {
      group.get('confirmPassword').setErrors({incorrect: true});
      return {passwordNotTheSame: true};
    }
    return null;
  }

  detectChangedValue(controlName: string): void {
    this.registerForm.get(controlName).valueChanges
      .pipe(debounceTime(1000))
      .subscribe(value => {
        console.log(value);
        this.changedValue = true;
      });
    this.changedValue = false;
  }

  // asyncPasswordCheck(group: FormGroup): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if (!(group.get('password').value === group.get('confirmPassword').value)) {
  //         // group.get('confirmPassword').setErrors({incorrect: true});
  //         return resolve({passwordNotTheSame: true});
  //       }
  //       return resolve(null);
  //     }, 2000);
  //   });
  //   return promise;
  // }

}
