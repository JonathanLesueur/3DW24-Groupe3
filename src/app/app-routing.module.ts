import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent },
    { path: 'my-lists', component: RecipeComponent },
    { path: 'recipe/:id', component: RecipeComponent },
    { path: 'new-list', component: IngredientsComponent },
    { path: 'my-recipes', component: RecipeComponent },
    { path: 'search-advanced', component: RecipeComponent },
    { path: 'login', component: RecipeComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
