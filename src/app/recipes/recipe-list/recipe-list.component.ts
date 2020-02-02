import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.recipeService.newRecipe(
      new Recipe('Banana Split',
        'This is a recipe to make a Banana Split',
        'https://gourmandiz.dhnet.be/app/uploads/2018/06/140618RECETTE4PVDA-690x388.jpg',[
          new Ingredient('Banana', 1), 
          new Ingredient('Chocolate Icecream', 1), 
          new Ingredient('Vanilla Icecream', 1),
          new Ingredient('Stawberry Icecream', 1)
        ]
      )
    );
    this.recipes = this.recipeService.getRecipes();
  }
}
