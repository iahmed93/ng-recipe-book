import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/Ingredient";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./Recipe";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("test 1", 
        "Testing recipe 2", 
        "https://tpc.googlesyndication.com/simgad/17186930116409687848/downsize_200k_v1?w=400&h=209",
        [new Ingredient('tomato', 1), new Ingredient('onions', 2)]),
        new Recipe("test 2", 
        "Testing recipe 2", 
        "https://tpc.googlesyndication.com/simgad/17186930116409687848/downsize_200k_v1?w=400&h=209",
        [new Ingredient('tomato', 1), new Ingredient('onions', 2)])
    ];

    constructor(private shoppingListService: ShoppingListService){}
    
    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) : void {
        ingredients.forEach((ingredient) => {this.shoppingListService.addIngredient(ingredient)});
    }

}