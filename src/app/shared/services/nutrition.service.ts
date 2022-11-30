import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class NutritionService {
  app_id = '5b4c7c88';
  app_key = 'e9ccd680bcb9b7215ddde995de1e47d1';

  constructor(private httpClient: HttpClient) {
  }

  getNutritionData(ingredient: string[] | undefined) {
    return this.httpClient.get(environment.baseUrl + `nutrition-data?app_id=${this.app_id}&app_key=${this.app_key}&ingr=${ingredient}`);
  }

  getNutritionDetails(ingredient: string[] | undefined) {
    return this.httpClient.post(environment.baseUrl + `nutrition-details?app_id=${this.app_id}&app_key=${this.app_key}`, {
      title: 'cheese',
      ingr: ingredient,
    });
  }
}
