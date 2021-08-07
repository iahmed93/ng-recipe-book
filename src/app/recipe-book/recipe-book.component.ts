import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './Recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {

  currentRecipe: Recipe;
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      console.log(recipe);
      this.currentRecipe = recipe
    });
  }

}
