import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

    public recipe: Recipe;
    public persons: number = 1;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
        const currentId = Number(this.route.snapshot.paramMap.get('id'));
        (!isNaN(currentId)) ? this.recipe = this.recipeService.getRecipeById(currentId) : '';
  }

  changePersons(type: String): void {
      switch(type) {
          case 'down':
            this.persons--;
          break;
          case 'up':
            this.persons++;
          break;
      }

      (this.persons < 1) ? this.persons = 1 : '';
  }
}
