import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { Recipe } from '../../Recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() selected = new EventEmitter<void>()
  
  constructor() { }

  ngOnInit(): void {
  }


  onSelected(){
    this.selected.emit();
  }

}
