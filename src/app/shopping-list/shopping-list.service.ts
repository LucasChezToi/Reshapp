import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from "@angular/core";

@Injectable()
export class ShoppingListService {
    ingredientAdded = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient ('Banana', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientAdded.next(this.ingredients.slice());
    }
}