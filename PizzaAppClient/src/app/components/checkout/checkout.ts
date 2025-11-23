import { CommonModule, formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PizzaService } from '../../services/pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class Checkout {
  adress: FormControl<string | null> = new FormControl('', Validators.required);
  description: FormControl<string | null> = new FormControl(
    '',
    Validators.required
  );
  constructor(private pizzaService: PizzaService, private router: Router) {}

  onSubmitOrder() {
    this.pizzaService
      .submitOrder(this.adress.value ?? '', this.description.value ?? '')
      .subscribe();
      this.pizzaService.updateActiveOrder([]);
      this.router.navigate(['/']);
  }
}
