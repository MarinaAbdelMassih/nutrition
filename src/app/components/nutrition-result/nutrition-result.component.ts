import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nutrition-result',
  templateUrl: './nutrition-result.component.html',
  styleUrls: ['./nutrition-result.component.scss']
})
export class NutritionResultComponent {
  @Input() ELEMENT_DATA?: any;
  dataSource = this.ELEMENT_DATA;
  math = Math;

}


