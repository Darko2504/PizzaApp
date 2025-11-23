import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper'
import { PizzaService } from '../../services/pizza.service';
import { Ingredients } from "../ingredients/ingredients";
import { PreviewOrder } from "../preview-order/preview-order";
import { Checkout } from "../checkout/checkout";

@Component({
  selector: 'app-pizza-maker',
  imports: [
    CommonModule,
    MatStepperModule,
    Ingredients,
    PreviewOrder,
    Checkout
],
  templateUrl: './pizza-maker.html',
  styleUrl: './pizza-maker.scss'
})
export class PizzaMaker {
  hasOrders = computed(() => this.pizzaService.activeOrder().length);

  constructor(private pizzaService: PizzaService) {
    
  }
}
