import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe = new Recipe("test", "Testing recipe", "https://tpc.googlesyndication.com/simgad/17186930116409687848/downsize_200k_v1?w=400&h=209")
  constructor() { }

  ngOnInit(): void {
  }

}
