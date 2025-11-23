import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Ingredient } from '../types/enums/ingridients.enum';

@Directive({
  selector: '[appHotPizza]',
})
export class HotPizza {
  @Input() ingredients: Ingredient[] | undefined = [];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    if (!this.ingredients?.length) {
      return;
    }

    const hasChilliPeppers = this.ingredients.includes(
      Ingredient.CHILLI_PEPPER
    );

    if (hasChilliPeppers) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px, solid red');
    }
  }
}
