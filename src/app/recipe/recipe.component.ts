import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

    public recipeId: number = 0;
    public persons: number = 1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
        const currentId = this.route.snapshot.paramMap.get('id');
        (!isNaN(Number(currentId))) ? this.recipeId = Number(currentId) : ''; 
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
