import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NutritionComponent} from './components/nutrition/nutrition.component';
import {NutritionResultComponent} from './components/nutrition-result/nutrition-result.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from '@angular/material/table';
import { NutritionFactsComponent } from './components/nutrition-facts/nutrition-facts.component';

@NgModule({
  declarations: [
    AppComponent,
    NutritionComponent,
    NutritionResultComponent,
    NutritionFactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
