import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { RecipeComponent } from './recipe/recipe.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { RecipeShortcutComponent } from './recipe-shortcut/recipe-shortcut.component';
import { ListShortcutComponent } from './list-shortcut/list-shortcut.component';
import { RecipeStepComponent } from './recipe-step/recipe-step.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RecipeComponent,
    MainNavComponent,
    MainHeaderComponent,
    MainFooterComponent,
    RecipeShortcutComponent,
    ListShortcutComponent,
    RecipeStepComponent,
    IngredientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
