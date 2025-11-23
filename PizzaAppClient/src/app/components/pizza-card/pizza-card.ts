import { CommonModule } from '@angular/common';
import { Component, computed, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips' 
import { NormalizeEnumPipe } from '../../pipes/normalize-enum-pipe';
import { HotPizza } from '../../directives/hot-pizza';
import { Pizza } from '../../types/interfaces/piza.interface';
import { AuthService } from '../../services/auth.service';
import { PizzaService } from '../../services/pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza-card',
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    NormalizeEnumPipe,
    HotPizza
  ],
  templateUrl: './pizza-card.html',
  styleUrl: './pizza-card.scss'
})
export class PizzaCard {
  @Input() pizza: Pizza | undefined;
  isLoggedIn = computed(() => this.authService.isLoggedIn());

  constructor(
    private authService: AuthService,
    private pizzaService: PizzaService,
    private router: Router
  ){}

  selectPizza(): void {
    this.pizzaService.updateSelectedIngredients(this.pizza?.ingridients ?? []);
    this.router.navigate(['/pizza-maker']);
  }
}
