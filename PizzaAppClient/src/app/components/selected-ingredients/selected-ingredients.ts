import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { Ingredient } from '../../types/enums/ingridients.enum';
import { PizzaSize } from '../../types/enums/pizza-size.enum';
import { PizzaService } from '../../services/pizza.service';
import { MatStepper } from '@angular/material/stepper';
import { calculatePizzaPrice } from '../../helpers/pizza.helper';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { NormalizeEnumPipe } from "../../pipes/normalize-enum-pipe";
@Component({
  selector: 'app-selected-ingredients',
  imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule, MatButtonToggleModule, NormalizeEnumPipe],
  templateUrl: './selected-ingredients.html',
  styleUrl: './selected-ingredients.scss',
})
export class SelectedIngredients {
  selectedIngredients = input<Ingredient[]>([]);

  handleDeleteIngredient = output<Ingredient>();

  size: PizzaSize = PizzaSize.MEDIUM;
  activeOrder = computed(() => this.pizzaService.activeOrder());

  constructor(private pizzaService: PizzaService, private matStepper: MatStepper){ }

  onDeleteIngredient(ingredient: Ingredient){
    this.handleDeleteIngredient.emit(ingredient);
  }

  onSizeChange(event: any){
    this.size = event.value;
  }

  savePizza(){
    this.pizzaService.updateActiveOrder([
      ...this.activeOrder(),
      {
      id: Date.now(),
      size: this.size,
      ingridients: this.selectedIngredients(),
      description: 'Description',
      name: 'Pizza',
      image: '',
      price: calculatePizzaPrice(this.size, this.selectedIngredients())
      }
    ]);
    setTimeout(() => {
      this.matStepper.next()
    });

    this.selectedIngredients().forEach((i) => this.handleDeleteIngredient.emit(i));
  }

  savePizzaAndMakeAnother() {
    this.pizzaService.updateActiveOrder([
      ...this.activeOrder(),
      {
      id: Date.now(),
      size: this.size,
      ingridients: this.selectedIngredients(),
      description: 'Description',
      name: 'Pizza',
      image: '',
      price: calculatePizzaPrice(this.size, this.selectedIngredients())
      }
    ]);

    this.selectedIngredients().forEach((i) => this.handleDeleteIngredient.emit(i));
  }

  onReset() {
    this.selectedIngredients().forEach((i) => this.handleDeleteIngredient.emit(i));
  }
}
