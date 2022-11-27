import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nutrition-facts',
  templateUrl: './nutrition-facts.component.html',
  styleUrls: ['./nutrition-facts.component.scss']
})
export class NutritionFactsComponent {
 @Input() nutritionData: any;
  math = Math;
}
