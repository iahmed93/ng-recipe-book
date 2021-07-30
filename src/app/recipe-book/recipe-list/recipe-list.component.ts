import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [new Recipe("test", "Testing recipe", "https://tpc.googlesyndication.com/simgad/17186930116409687848/downsize_200k_v1?w=400&h=209")];

  constructor() { }

  ngOnInit(): void {
  }

}
