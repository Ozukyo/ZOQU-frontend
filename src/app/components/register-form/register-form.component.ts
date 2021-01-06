import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      userPassword: new FormGroup({
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
      }, {validators: this.passwordCheck.bind(this)})
    });
  }

  onSubmit(): void {
    console.log(this.registerForm);
  }

  passwordCheck(group: FormGroup): { [s: string]: boolean } {
    if (!(group.get('password').value === group.get('confirmPassword').value)) {
      return {passwordNotTheSame: true};
    }
    return null;
  }

}
