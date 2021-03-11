import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  error: string;


  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }


  onLogin(): void {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value)
      .subscribe(
        result => this.router.navigateByUrl('profil'),
        err => this.error = 'Nie można sie zalogować'
        );
  }
}
