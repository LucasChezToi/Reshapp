import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {  }

  onAdd() {
    const ingredient = new Ingredient(this.form.value.name, this.form.value.amount);
    this.shoppingListService.addIngredient(ingredient);
  }

  onDelete() {  }

  onClear() {  }

}
