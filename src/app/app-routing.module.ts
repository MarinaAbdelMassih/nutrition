import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NutritionComponent} from "./components/nutrition/nutrition.component";
import {NutritionResultComponent} from "./components/nutrition-result/nutrition-result.component";
import {NutritionFactsComponent} from "./components/nutrition-facts/nutrition-facts.component";

const routes: Routes = [
  {path: '', component: NutritionComponent},
  {path: 'details', component: NutritionResultComponent},
  {path: 'facts', component: NutritionFactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
