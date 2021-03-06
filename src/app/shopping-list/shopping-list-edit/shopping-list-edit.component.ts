import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(ingredient);
    this.clearInput();
  }

  clearInput(){
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '0';
  }

}
