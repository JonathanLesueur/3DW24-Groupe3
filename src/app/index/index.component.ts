import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe }  from '../recipe';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  getRecipes(): void {
      this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

  ngOnInit(): void {
      this.getRecipes();
  }

}
