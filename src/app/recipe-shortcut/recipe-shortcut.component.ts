import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'recipe-shortcut',
  templateUrl: './recipe-shortcut.component.html',
  styleUrls: ['./recipe-shortcut.component.scss']
})
export class RecipeShortcutComponent implements OnInit {

  @Input() recipeId: number;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRecipe(value: number): void {
    this.router.navigateByUrl('/recipe/'+ value);
  }

}
