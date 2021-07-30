import { Component, OnInit } from '@angular/core';
import { Ingredient } from './Ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [new Ingredient('tset', 2), new Ingredient('tomato', 4)];
  constructor() { }

  ngOnInit(): void {
  }

}
