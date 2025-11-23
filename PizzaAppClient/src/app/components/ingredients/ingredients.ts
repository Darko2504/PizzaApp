import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { PizzaService } from '../../services/pizza.service';
import { Ingredient } from '../../types/enums/ingridients.enum';
import { IngredientsList } from "../ingredients-list/ingredients-list";
import { SelectedIngredients } from "../selected-ingredients/selected-ingredients";

@Component({
  selector: 'app-ingredients',
  imports: [CommonModule, IngredientsList, SelectedIngredients],
  templateUrl: './ingredients.html',
  styleUrl: './ingredients.scss',
})
export class Ingredients {
  ingridients = computed(() => this.pizzaService.selectedIngredients());

  constructor(private pizzaService: PizzaService) {}

  handleSelectIngredient(ingredients: Ingredient[]): void{
    this.pizzaService.updateSelectedIngredients(ingredients);
  }

  handleDeleteIngredient(ingredient: Ingredient): void{
    const updatedIngredients = this.ingridients().filter((i) => i !== ingredient);
    this.pizzaService.updateSelectedIngredients(updatedIngredients);
  }
}
