import { Component, computed } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { PizzaCards } from "../pizza-cards/pizza-cards";

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    CommonModule,
    MatButtonModule,
    RouterLink,
    PizzaCards
],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  isLoggedIn = computed(() => this.authService.isLoggedIn());

  constructor(private authService: AuthService){}


}
