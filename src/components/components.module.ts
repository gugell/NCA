import { NgModule } from '@angular/core';
import { HeadToolbarComponent } from './head-toolbar/head-toolbar';
import { RecipeCardComponent } from './recipe-card/recipe-card';
@NgModule({
	declarations: [HeadToolbarComponent,
    RecipeCardComponent],
	imports: [],
	exports: [HeadToolbarComponent,
    RecipeCardComponent]
})
export class ComponentsModule {}
