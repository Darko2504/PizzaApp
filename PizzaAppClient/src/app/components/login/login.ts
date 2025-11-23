import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  hidePassword: boolean = true;
  // private authService = inject(AuthService);

  constructor(private authService: AuthService) {}

  loginForm: FormGroup = new FormGroup({
    username: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

get hasNameRequiredError(): boolean{
    return !!(this.loginForm.get('username')?.hasError('required') && 
    (this.loginForm.get('username')?.touched ||
     this.loginForm.get('username')?.dirty)
    );
  } 

  get hasPasswordRequiredError(): boolean{
    return !!(this.loginForm.get('password')?.hasError('required') && 
    (this.loginForm.get('password')?.touched ||
     this.loginForm.get('password')?.dirty)
    );
  }
  onLogin(){
    this.authService.login(this.loginForm.value satisfies Login).subscribe();
  }
}
