import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

    ingredientChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    constructor() {
    }

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (const ingredient of ingredients) {
        //     this.addIngredients(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

}