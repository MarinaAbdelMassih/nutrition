import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NutritionService } from '../../shared/services/nutrition.service';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss'],
})
export class NutritionComponent {
  @Output() formValueData: EventEmitter<any> = new EventEmitter<any>();
  @Output() dataForm: EventEmitter<any> = new EventEmitter<any>();

  nutrition_form: FormGroup;
  formValue: string[] | undefined;
  data: any;

  constructor(private nutritionService: NutritionService, private fb: FormBuilder) {
    this.nutrition_form = this.fb.group({
      foodData: ['', [Validators.required]],
    });
  }

  submit() {
    this.formValue = this.nutrition_form.value.foodData.split('\n');
    this.formValueData.emit(this.formValue);
    console.log('split', this.formValue);
    this.nutritionService.getNutritionDetails(this.formValue).subscribe(
      data => {
        this.data = data;
        this.dataForm.emit(data);
        console.log(data);
      });
  }

}
