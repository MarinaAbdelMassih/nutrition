import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  app_id = '5b4c7c88';
  app_key = 'e9ccd680bcb9b7215ddde995de1e47d1';

  constructor(private httpClient:HttpClient) { }

  getNutritionData(ingrFood: string[] | undefined)
  {
    return this.httpClient.get(`https://api.edamam.com/api/nutrition-data?app_id=${this.app_id}&app_key=${this.app_key}&ingr=${ingrFood}`)
  }
  getNutritionDetails(ingrFood: string[] | undefined)
  {
    return this.httpClient.post(`https://api.edamam.com/api/nutrition-details?app_id=${this.app_id}&app_key=${this.app_key}`,{
      title: "cheese",
      ingr:ingrFood,
    })
  }
}
