import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient';
import { INGREDIENTS } from './mock-ingredients';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IngredientService {

  constructor() { }

  getIngredients(): Observable<Ingredient[]> {
      return of(INGREDIENTS);
  }
  getIngredientById(ingredientId: number) {
      return INGREDIENTS.find(element => element.id === ingredientId);
  }
}
