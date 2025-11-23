import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { map, Observable } from 'rxjs';
import { Order } from '../../types/interfaces/order.interface';
import { PizzaService } from '../../services/pizza.service';

@Component({
  selector: 'app-previous-order',
  imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './previous-order.html',
  styleUrl: './previous-order.scss'
})
export class PreviousOrder {

orders$: Observable<Order[]> = new Observable<Order[]>();
  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.orders$ = this.pizzaService
      .getOrderForUser(true)
      .pipe(map((r: any) => r.result));

    // console.log(this.orders$);
}}
