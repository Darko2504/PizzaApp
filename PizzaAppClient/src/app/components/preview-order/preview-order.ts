import { Component, computed } from '@angular/core';
import { PizzaService } from '../../services/pizza.service';
import { Pizza } from '../../types/interfaces/piza.interface';
import { MatList } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { NormalizeEnumPipe } from '../../pipes/normalize-enum-pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatListItem, MatListItemTitle, MatListItemLine } from "@angular/material/list";

@Component({
  selector: 'app-preview-order',
  imports: [
    MatList,
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    NormalizeEnumPipe,
    MatTooltipModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListItem,
    MatListItemTitle,
    MatListItemLine
],
  templateUrl: './preview-order.html',
  styleUrl: './preview-order.scss',
})
export class PreviewOrder {
  activeOrder = computed(() => this.pizzaService.activeOrder());

  constructor(private pizzaService: PizzaService) {}

  calculateTotalPrice(order: Pizza[] | null): number {
    if (!order) {
      return 0;
    }
    return order.reduce((sum, pizza) => (sum += pizza.price), 0);
  }

  onDeletePizza(index: number): void {
    this.pizzaService.deletePizzaFromOrder(index);
  }
}
