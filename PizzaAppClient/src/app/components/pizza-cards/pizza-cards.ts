import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Pizza } from '../../types/interfaces/piza.interface';
import { defaultPizzas } from '../../constants/default-pizzas';
import { CommonModule } from '@angular/common';
import { PizzaCard } from '../pizza-card/pizza-card';
import {MatGridListModule} from '@angular/material/grid-list'

@Component({
  selector: 'app-pizza-cards',
  imports: [
    CommonModule,
    MatGridListModule,
    PizzaCard
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pizza-cards.html',
  styleUrl: './pizza-cards.scss'
})
export class PizzaCards {
  pizzas: Pizza[] = [];
  breakPoint: number = 3;

  ngOnInit() {
    this.pizzas = defaultPizzas;
  }

  onResize(event: any) {
    this.breakPoint = Math.floor(event.target.innerWidth / 320);
  }
}
