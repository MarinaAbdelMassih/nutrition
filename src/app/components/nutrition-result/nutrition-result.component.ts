import { Component, Input } from '@angular/core';
import { INutrition } from '../../shared/interfaces/nutrition';

@Component({
  selector: 'app-nutrition-result',
  templateUrl: './nutrition-result.component.html',
  styleUrls: ['./nutrition-result.component.scss'],
})
export class NutritionResultComponent {

  @Input() nutrition?: INutrition;
  math = Math;

}


