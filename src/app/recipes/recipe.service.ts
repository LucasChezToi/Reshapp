import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Banana Split',
            'This is a recipe to make a Banana Split',
            'https://gourmandiz.dhnet.be/app/uploads/2018/06/140618RECETTE4PVDA-690x388.jpg',
            [
                new Ingredient('Banana', 1), 
                new Ingredient('Chocolate Icecream', 1), 
                new Ingredient('Vanilla Icecream', 1),
                new Ingredient('Stawberry Icecream', 1)
            ]
        ),
        new Recipe('Frozen Yolita',
            'This is a recipe to make a Frozen Yolita',
            'https://media-cdn.tripadvisor.com/media/photo-s/09/f7/81/d0/yolita-frozen-yogurt.jpg',
            [
                new Ingredient('Yogurt', 1), 
                new Ingredient('Raspberry', 10), 
                new Ingredient('Mango', 1)
            ]
        )
      ];

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      newRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
      }
}