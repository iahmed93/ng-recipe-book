import { Recipe } from "./Recipe";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe("test", 
        "Testing recipe", 
        "https://tpc.googlesyndication.com/simgad/17186930116409687848/downsize_200k_v1?w=400&h=209"),
        new Recipe("test", 
        "Testing recipe", 
        "https://tpc.googlesyndication.com/simgad/17186930116409687848/downsize_200k_v1?w=400&h=209")
    ];
    
    getRecipes(){
        return this.recipes.slice();
    }

}