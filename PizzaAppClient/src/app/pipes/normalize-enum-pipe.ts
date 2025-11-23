import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalizeEnum'
})
export class NormalizeEnumPipe implements PipeTransform {

  transform(value: string | string[]): string{
    if(Array.isArray(value)){
      return value.map((v) => this.capitalizeIngredient(v)).join(`, `);
    }
    if(typeof value !== 'string' || value.length){
      '';
    }

    return this.capitalizeIngredient(value);
  }

  capitalizeIngredient(value: string): string {
    const firstLetter = value.charAt(0);
    const lowerCaseValue = value.slice(1);

    return `${firstLetter}${lowerCaseValue}`.replace('_', '');
  }
}
