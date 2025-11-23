import {
  LARGE_INGRIDIENT_PRICE,
  LARGE_PIZZA_PRICE,
  MEDIUM_INGRIDIENT_PRICE,
  MEDIUM_PIZZA_PRICE,
  SMALL_INGRIDIENT_PRICE,
  SMALL_PIZZA_PRICE,
} from '../constants/pizza-prices.constants';
import { Ingredient, Ingredientbe } from '../types/enums/ingridients.enum';
import { PizzaSize } from '../types/enums/pizza-size.enum';

export function calculatePizzaPrice(
  size: PizzaSize,
  ingredients: Ingredient[]
): number {
  switch (size) {
    case PizzaSize.LARGE:
      return LARGE_PIZZA_PRICE + ingredients.length * LARGE_INGRIDIENT_PRICE;
    case PizzaSize.MEDIUM:
      return MEDIUM_PIZZA_PRICE + ingredients.length * MEDIUM_INGRIDIENT_PRICE;
    case PizzaSize.SMALL:
      return SMALL_PIZZA_PRICE + ingredients.length * SMALL_INGRIDIENT_PRICE;
    default:
      return MEDIUM_PIZZA_PRICE + ingredients.length * MEDIUM_INGRIDIENT_PRICE;
  }
}

export function convertIngridientsToBe(
    ingridients : Ingredient[]
): Ingredientbe[]{
 return ingridients
 .map((ing) => {
    const key = Object.keys(Ingredient).find((k) => Ingredient[k as keyof typeof Ingredient] === ing);

    return key ? Ingredientbe[key as keyof typeof Ingredientbe] : null;
 })
 .filter((ingredient) => ingredient !== null) as Ingredientbe[]
}
