import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Butter chicken',
      'Healthy version of your favourite Friday night chicken curry.',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/01/butter-chicken.jpg?itok=eE_5ufkS',
      [
        new Ingredient('Skinless boneless chicken thighs', 5),
        new Ingredient('Juiced lemon', 1),
        new Ingredient('Tsp ground cumin', 1),
        new Ingredient('Tsp paprika', 1),
        new Ingredient('Tsp hot chilli powder', 2),
        new Ingredient('Natural yogurt', 1)
      ]
    ),
    new Recipe(
      'Classic lasagne',
      'Kids will love it!',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/classic-lasange.jpg?itok=aYJg59N3',
      [
        new Ingredient('Tbsp olive oil', 1),
        new Ingredient('Rasher smoked streaky bacon', 2),
        new Ingredient('Onion', 1),
        new Ingredient('Celery stick', 1),
        new Ingredient('Carrot', 1),
        new Ingredient('Garlic clove', 2),
        new Ingredient('Beef mince', 500),
        new Ingredient('Tbsp tomato purée', 1),
        new Ingredient('Can chopped tomatoes', 2),
        new Ingredient('Tbsp clear honey', 1),
        new Ingredient('Pack fresh egg lasagne sheets', 500),
        new Ingredient('Crème fraîche', 400),
        new Ingredient('Ball mozzarella', 125),
        new Ingredient('Freshly grated parmesan', 50)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
