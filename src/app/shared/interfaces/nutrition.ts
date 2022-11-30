export interface INutrition {
  calories: number;
  cautions: [];
  dietLabels: string[];
  healthLabels: string[];
  ingredients: {
    text: string, parsed: {
      food: string,
      foodId: string, foodMatch: string, measure: string, measureURI: string, nutrients: Nutrients, quantity: number, retainedWeight: number, status: string, weight: number
    }[ ]
  }[];
  totalDaily: Nutrients;
  totalNutrients: Nutrients;
  totalWeight: number;
  uri: string;
  yield: number;
}

interface Nutrients {
  CHOLE: Nutrient;
  CHOCDF: Nutrient;
  PROCNT: Nutrient;
  VITA_RAE: Nutrient;
  VITC: Nutrient;
  SUGAR: Nutrient;
  NA: Nutrient;
  FAT: Nutrient;
  FIBTG: Nutrient;
  CA: Nutrient;
  FE: Nutrient;
  K: Nutrient;
  ENERC_KCAL: Nutrient;
}

interface Nutrient {
  label: string;
  quantity: number;
  unit: string;
}
