import { Ingredient, Ingredientbe } from '../enums/ingridients.enum';
import { PizzaSize } from '../enums/pizza-size.enum';


// Order that we get from the server as a response
export interface Pizza {
  id: number;
  name: string;
  price: number;
  description: string;
  size?: PizzaSize;
  image: string;
  ingridients: Ingredient[];
}


// Order that we send to the server
export interface PizzaBE {
  name: string;
  price: number;
  ingridients: Ingredientbe[];
  description?: string;
}
