import { Component } from '@angular/core';
import { INutrition } from './shared/interfaces/nutrition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nutritionApp';
  nutritionData?: INutrition;
  showFlag?: boolean;

  getNutritionData(data: any) {
    this.nutritionData = data;
    console.log('res', data);
  }

  viewDetails() {
    this.showFlag = true;
  }
}
