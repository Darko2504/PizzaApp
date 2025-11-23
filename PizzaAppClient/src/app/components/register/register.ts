import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import{MatInputModule} from '@angular/material/input'
import { CommonModule } from '@angular/common';
import{MatFormFieldModule} from '@angular/material/form-field'
import { Register } from '../../types/interfaces/auth.interface';

@Component({
  selector: 'app-register',
  imports: [CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Registerr {
  hidePassword: boolean = true;

  constructor(private authService: AuthService) {}

  registerForm: FormGroup = new FormGroup({
    username: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.email, Validators.required]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8),
    ]),

  });

  get hasNameRequiredError(): boolean{
    return !!(this.registerForm.get('username')?.hasError('required') && 
    (this.registerForm.get('username')?.touched ||
     this.registerForm.get('username')?.dirty)
    );
  } 

  get hasEmailError(): boolean{
    return !!(this.registerForm.get('email')?.hasError('email') && 
    (this.registerForm.get('email')?.touched ||
     this.registerForm.get('email')?.dirty)
    );
  }

   get hasEmailRequiredError(): boolean{
    return !!(this.registerForm.get('email')?.hasError('required') && 
    (this.registerForm.get('email')?.touched ||
     this.registerForm.get('email')?.dirty)
    );
  }

  get hasPasswordRequiredError(): boolean{
    return !!(this.registerForm.get('password')?.hasError('required') && 
    (this.registerForm.get('password')?.touched ||
     this.registerForm.get('password')?.dirty)
    );
  }

  get hasPasswordMinLengthError(): boolean{
    return !!(this.registerForm.get('password')?.hasError('minLength') && 
    (this.registerForm.get('email')?.touched ||
     this.registerForm.get('email')?.dirty)
    );
  }

  onRegister(){
    this.authService.register(this.registerForm.value satisfies Register).subscribe();
  }
}import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

