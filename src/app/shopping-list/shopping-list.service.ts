import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/Ingredient";

@Injectable({providedIn:'root'})
export class ShoppingListService {

    ingredientAdded = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [];

    public getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    public addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.getIngredients());
    }

}