import { EventEmitter } from "@angular/core";
import { Recipe } from "./Recipe";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("test 1", 
        "Testing recipe 2", 
        "https://tpc.googlesyndication.com/simgad/17186930116409687848/downsize_200k_v1?w=400&h=209"),
        new Recipe("test 2", 
        "Testing recipe 2", 
        "https://tpc.googlesyndication.com/simgad/17186930116409687848/downsize_200k_v1?w=400&h=209")
    ];
    
    getRecipes(){
        return this.recipes.slice();
    }

}