import {Component, Input} from '@angular/core';
import {INutrition} from "../../shared/interfaces/nutrition";

@Component({
  selector: 'app-nutrition-facts',
  templateUrl: './nutrition-facts.component.html',
  styleUrls: ['./nutrition-facts.component.scss']
})
export class NutritionFactsComponent {
 @Input() nutritionData: any ;
 // @Input() nutritionData?: INutrition ;
  math = Math;
}
