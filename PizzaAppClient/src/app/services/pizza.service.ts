import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Pizza, PizzaBE } from '../types/interfaces/piza.interface';
import { Ingredient } from '../types/enums/ingridients.enum';
import { catchError, Observable, of, tap } from 'rxjs';
import { apiUrl, snackBarConfig } from '../constants/app.constants';
import { MatSnackBar, MatSnackBarActions, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Order, OrderBE } from '../types/interfaces/order.interface';
import { convertIngridientsToBe } from '../helpers/pizza.helper';
import { addAriaReferencedId } from '@angular/cdk/a11y';

@Injectable({
  providedIn: 'root', // This means that the service will be available in the whole application. It's deprecated, and will be set to 'root' as default in the following version of Angular.
})
export class PizzaService {
  activeOrder = signal<Pizza[]>([]);
  selectedIngredients = signal<Ingredient[]>([]);

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  updateActiveOrder(order: Pizza[]): void {
    this.activeOrder.set(order);
  }

  updateSelectedIngredients(ingredients: Ingredient[]): void {
    this.selectedIngredients.set(ingredients);
  }

  getSavedPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(`${apiUrl}/Pizza`);
  }

  getOrderForUser(isOrderForUser: boolean): Observable<Order[]> {
    const params = new HttpParams().set(
      'isOrderForUser',
      isOrderForUser.toString()
    );
    return this.http.get<Order[]>(`${apiUrl}/Order`, { params }).pipe(
      catchError((error) => {
        this.snackBar.open(
          error?.error?.errors?.[0] || `Error while fetching orders!`,
          'Close',
          snackBarConfig
        );
        return of([]); //vrati mi observable od prazna niza. ako dade 500 status kod 
      })
    );
  }

  submitOrder(adressTo: string, description: string): Observable<void>{
    const pizzas = this.activeOrder();

    //converting pizza object to fit BE body
    const mappedPizzas = pizzas.map((pizza) => ({
      name: pizza.name,
      description: pizza.description, // corrected key
      price: Math.round(pizza.price),
      ingridients: convertIngridientsToBe(pizza.ingridients), // fixed key to match interface
    })) satisfies PizzaBE[];


    const order: OrderBE = {
      pizzas: mappedPizzas, 
      adressTo: adressTo,
      description,
      orderPrice: Math.round(
      pizzas.reduce((acc, pizza) => acc + pizza.price, 0)
      ),
    };

    return this.http.post<void>(`${apiUrl}/Order`, order).pipe(
      tap(() => {
        this.snackBar.open(
          'You have succesfully created an order',
          'Close',
          snackBarConfig
        )
      }),
      catchError((error) => {
        if(error) {
          this.snackBar.open(
            error?.error?.errors?.[0] || `Error while making an order`,
            'Close',
            snackBarConfig
          );
        }
        return of();
      })
    )
  }

  deletePizzaFromOrder(id: number): void{
    const updatedOrder = this.activeOrder().filter((pizza) => pizza.id !== id);
    this.updateActiveOrder(updatedOrder);
  }

  deletePizza(id: number): Observable<void>{
    return this.http.delete<void>(`${apiUrl}/Pizza/${id}`).pipe(
      tap(() => {
        this.snackBar.open(
          'You have succesfully deleted a pizza',
          'Close',
          snackBarConfig
        )
      }),
      catchError((error) => {
        this.snackBar.open(
          error?.error?.errors?.[0] || `Error while making a pizza`,
          'Close',
          snackBarConfig
        );
        return of();
      })
    )
  }
}
