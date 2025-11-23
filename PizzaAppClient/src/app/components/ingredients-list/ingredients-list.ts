import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { NormalizeEnumPipe } from '../../pipes/normalize-enum-pipe';
import { PizzaService } from '../../services/pizza.service';
import { Ingredient } from '../../types/enums/ingridients.enum';
import { MatChipOption } from '@angular/material/chips';

@Component({
  selector: 'app-ingredients-list',
  imports: [CommonModule, MatListModule, NormalizeEnumPipe],
  templateUrl: './ingredients-list.html',
  styleUrl: './ingredients-list.scss',
})
export class IngredientsList {
  selectedIngredients = input<Ingredient[]>([]);
  onSelectIngredient = output<Ingredient[]>();
  ingredients: Ingredient[] = Object.values(Ingredient);

  constructor(private pizzaService: PizzaService) {}

  onSelect(event: any) {
    this.onSelectIngredient.emit(
      event.source.selectedOptions.selected.map(
        (item: MatChipOption) => item.value
      )
    );
  }
}
