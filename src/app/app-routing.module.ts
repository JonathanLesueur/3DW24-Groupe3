import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent },
    { path: 'my-lists', component: RecipeComponent },
    { path: 'recipe/:id', component: RecipeComponent },
    { path: 'new-list', component: RecipeComponent },
    { path: 'my-recipes', component: RecipeComponent },
    { path: 'search-advanced', component: RecipeComponent },
    { path: 'login', component: RecipeComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
